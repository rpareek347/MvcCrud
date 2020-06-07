
$(function () {
    var viewModel = new EmployeeViewModel();
    ko.applyBindings(viewModel);
    //ko.applyBindings(modelCreate);
});

function EmployeeViewModel() {
   
    var self = this; 
    self.ID = ko.observable(0);
    self.FirstName = ko.observable("");
    self.LastName = ko.observable("");
    self.JoinDate = ko.observable("");

    self.Employees = ko.observableArray();

    var Employee = {
        ID: self.ID,
        FirstName: self.FirstName,
        LastName: self.LastName,
        JoinDate: self.JoinDate
    };


    self.createEmployee= function () {
        try {
            $.ajax({
                url: '/Employee/Create',
                type: 'post',
                dataType: 'json',
                data: ko.toJSON(Employee), //Here the data wil be converted to JSON
                contentType: 'application/json',
                success: successCallback,
                error: errorCallback
            });
        } catch (e) {
            window.location.href = '/Employee/Index/';
        }
    }
    self.viewEmployees = function () {

        try {
            $.ajax({
                url: '/Employee/GetEmployees',
                type: 'GET',
                dataType: 'json',
                contentType: 'application/json',
                success: function (data) {
                    self.Employees(data);  
                },
                error: function (err) {
                    alert(err.status + " : " + err.statusText);
                }
            });
        } catch (e) {
            window.location.href = '/Employee/Index/';
        }
    }

    self.edit = function (Employee) {
        self.Employees(Employee);
    }

    self.update = function () {
        try {
            $.ajax({
                url: '/Home/Edit',
                type: 'POST',
                dataType: 'json',
                data: ko.toJSON(Employee),
                contentType: 'application/json',
                success: successCallback,
                error: errorCallback
            });
        } catch (e) {
            window.location.href = '/Home/Index/';
        }
    }

    self.viewEmployees();

   

};
function successCallback(data) {
    window.location.href = '/Employee/Index/';
}
function errorCallback(err) {
    window.location.href = '/Employee/Index/';
}


//var EmployeeViewModel = {
//    ID: ko.observable(),
//    FirstName: ko.observable(),
//    LastName: ko.observable(),
//    JoinDate: ko.observable(),

//    createEmployee: function () {
//        try {
//            $.ajax({
//                url: '/Employee/Create',
//                type: 'post',
//                dataType: 'json',
//                data: ko.toJSON(this), //Here the data wil be converted to JSON
//                contentType: 'application/json',
//                success: successCallback,
//                error: errorCallback
//            });
//        } catch (e) {
//            window.location.href = '/Employee/Index/';
//        }
//    }
//};
