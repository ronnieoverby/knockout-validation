var vm = {
    name: ko.observable().extend({
        validations: {
            required: null
        }
    }),
    age: ko.observable().extend({
        validations: {
            required: null,
            min: {value:14}
        }
    }),
    gender: ko.observable().extend({
        validations: {
            required: null
        }
    })
};

vm.valGroup = ko.createValidationGroup([vm.name, vm.age, vm.gender]);

vm.ok = function () {
    if (vm.valGroup.isValid())
        alert('good job');
};

$(function () {
    ko.applyBindings(vm);
});