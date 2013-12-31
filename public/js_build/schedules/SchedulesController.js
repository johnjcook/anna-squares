/*! anna-squares - v0.1.5 - 31-12-2013 */
"use strict";annaSquaresApp.controller("schedulesController",function($scope,$timeout){var d=($scope.scheduleItems=[],moment());$scope.scheduleDate=d._d,$scope.startTime=d._d,$scope.toggleWeeks=function(){$scope.showWeeks=!$scope.showWeeks},$scope.openCalendar=function(){$timeout(function(){$scope.calendarOpened=!0})},$scope.datePickerOptions={"year-format":"'yy'","starting-day":0},$scope.openTime=function(){$timeout(function(){$scope.timeOpened=!0})},$scope.timePickerOptions={},$scope.sortableOptions={stop:function(){computeTimes()}},$scope.alerts=[],$scope.columnDefintions=[{name:"isMust",displayName:"Must",type:"checkbox",isDisabled:!1,doOnChange:"",classExpression:"",minNumber:"",maxNumber:""},{name:"hasDocs",displayName:"Docs",type:"checkbox",isDisabled:!1,doOnChange:"",classExpression:"",minNumber:"",maxNumber:""},{name:"patient",displayName:"Patient",type:"text",isDisabled:!1,doOnChange:"",classExpression:"",minNumber:"",maxNumber:""},{name:"plan",displayName:"Plan",type:"number",isDisabled:!1,doOnChange:"changePlan(rowDatum)",classExpression:"{'strong': rowDatum.data.isMust === true }",minNumber:"0",maxNumber:""},{name:"met",displayName:"Met",type:"number",isDisabled:!1,doOnChange:"changeMet(rowDatum)",classExpression:"",minNumber:"0",maxNumber:""},{name:"variance",displayName:"Variance",type:"number",isDisabled:!0,doOnChange:"",classExpression:"",minNumber:"",maxNumber:""},{name:"startTime",displayName:"Start Time",type:"text",isDisabled:!0,doOnChange:"",classExpression:"",minNumber:"",maxNumber:""},{name:"endTime",displayName:"End Time",type:"text",isDisabled:!0,doOnChange:"",classExpression:"",minNumber:"",maxNumber:""}],$scope.rowData=[{id:1,data:{plan:0,met:0,variance:0}}],$scope.addRow=function(){var i,maxRowId,nextRowId;for(maxRowId=$scope.rowData[0].id,i=0;i<$scope.rowData.length;i++)$scope.rowData[i].id>maxRowId&&(maxRowId=$scope.rowData[i].id);nextRowId=maxRowId+1,$scope.rowData.push({id:nextRowId,data:{plan:0,met:0,variance:0}}),computeTimes()},$scope.removeRow=function(rowDatum){var targetIndex;return 1===$scope.rowData.length?($scope.alerts.length=0,$scope.alerts.push({type:"danger",msg:"This row cannot be removed because it is the last one."}),void 0):(targetIndex=$scope.rowData.indexOf(rowDatum),targetIndex>-1&&$scope.rowData.splice(targetIndex,1),computeTimes(),void 0)},$scope.closeAlert=function(index){$scope.alerts.splice(index,1)},$scope.markRowMust=function(rowId){console.log(rowId)},$scope.changeStartTime=function(){computeTimes()},$scope.changePlan=function(rowDatum){rowDatum.data.met=rowDatum.data.plan,$scope.changeMet(rowDatum),computeTimes()},$scope.changeMet=function(rowDatum){rowDatum.data.variance=rowDatum.data.met-rowDatum.data.plan,computeTimes()};var computeTimes=function(){var endTime,i,startTime=moment($scope.startTime);for(i=0;i<$scope.rowData.length;i++)endTime=startTime.clone().add("minutes",$scope.rowData[i].data.met),$scope.rowData[i].data.startTime=startTime.format("LT"),startTime=endTime.clone(),$scope.rowData[i].data.endTime=endTime.format("LT")};$scope.printScheduleItems=function(){console.log("printScheduleItems")},$scope.emailScheduleItems=function(){console.log("emailScheduleItems")},$scope.sendScheduleItems=function(){console.log("sendScheduleItems")},$scope.clearAllScheduleItems=function(){$scope.rowIds=[1],$scope.cellData={}},computeTimes()});