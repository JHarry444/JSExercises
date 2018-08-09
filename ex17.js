"use strict";
let operation = "";
let vehicles = [];

function showFields(currentOperation) {
    operation = currentOperation;
    document.getElementById("output").style.visibility = "hidden";
    document.getElementById("fields").style.visibility = "visible";
    if (currentOperation != "new") {
        document.getElementById("vehicleType").style.visibility = "hidden";
        document.getElementById("vehicleTypeLabel").style.visibility = "hidden";
        document.getElementById("vehicleFaults").style.visibility = "hidden";
        document.getElementById("vehicleFaultsLabel").style.visibility = "hidden";
    } else {
        document.getElementById("vehicleType").style.visibility = "visible";
        document.getElementById("vehicleTypeLabel").style.visibility = "visible";
        document.getElementById("vehicleFaults").style.visibility = "visible";
        document.getElementById("vehicleFaultsLabel").style.visibility = "visible";
    }
}

function submit() {
    if (operation == "new") {
        let newVehicle = new Object();
        newVehicle.reg = document.getElementById("vehicleReg").value;
        newVehicle.type = document.getElementById("vehicleType").value;
        newVehicle.faults = document.getElementById("vehicleFaults").value.split(",");
        if (newVehicle.reg.trim() != "" && !vehicles.find(a => a.reg === newVehicle.reg)) {
            vehicles.push(newVehicle);
        }
    } else if (operation == "checkout") {
        vehicles.splice(vehicles.findIndex(checkReg), 1);
    } else if (operation == "bill") {
        calcBill(vehicles[vehicles.findIndex(checkReg)]);
    }
    hideFields();
}

function calcBill(vehicle) {
    let price = 5;
    price **= vehicle.faults.length;
    document.getElementById("output").innerHTML = `<p>Reg: ${vehicle.reg}</p><p>Price: ${price}</p>`;
    document.getElementById("output").style.visibility = "visible";
}

function checkReg(vehicle) {
    return vehicle.reg == document.getElementById("vehicleReg").value;
}

function hideFields() {
    operation = "";
    document.getElementById("fields").style.visibility = "hidden";
    document.getElementById("vehicleType").style.visibility = "hidden";
    document.getElementById("vehicleTypeLabel").style.visibility = "hidden";
    document.getElementById("vehicleFaults").style.visibility = "hidden";
    document.getElementById("vehicleFaultsLabel").style.visibility = "hidden";
    document.getElementById("vehicleReg").value = "";
    document.getElementById("vehicleType").value = "";
    document.getElementById("vehicleFaults").value = "";
}

function showContents() {
    document.getElementById("output").style.visibility = "visible";
    let innerHTML = "<table border='1'><thead><th>Reg</th><th>Type</th><th>Faults</th></thead><tbody>";
    vehicles.forEach(a => innerHTML += `<tr><td>${a.reg}</td><td> ${a.type} </td><td> ${a.faults} </td></tr>`);
    innerHTML += "</tbody></table>";
    document.getElementById("output").innerHTML = innerHTML;
}
