pragma solidity ^0.4.20;

contract Attendance {

mapping(bytes32 ==> unit8) public totalAttendance

bytes32[] public qrCodeAttendance;

function Attendance(bytes32[] qrCode){

qrCodeAttendance = qrCode
}

function totalAttendanceDone(bytes32 attend) returns (unit8){
return totalAttendance[attend]
}

function attendTheClass(bytes32 attend){
    if(validStudent(attend) == false) throw;
    votesReceived[attend] += 1;
}

function validStudent(bytes32 attend) returns (bool){
    for(unit i=0; i<qrCodeAttendance.length ;i++){
        if(qrCodeAttendance[i] == attend){
            return true;
    }
    }
    return false;
    }
}
