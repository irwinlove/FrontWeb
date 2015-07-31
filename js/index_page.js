(function() {
    var app, deps;

    deps = ['angularBootstrapNavTree'];

    if (angular.version.full.indexOf("1.2") >= 0) {
        deps.push('ngAnimate');
    }

    app = angular.module('AbnTest', deps);

    app.controller('AbnTestController', function($scope, $timeout) {
        var apple_selected, tree, treedata_avm, treedata_geography;
        $scope.my_tree_handler = function(branch) {
            var _ref;
            $scope.output = "You selected: " + branch.label;
            if ((_ref = branch.data) != null ? _ref.description : void 0) {
                return $scope.output += '(' + branch.data.description + ')';
            }
        };
        apple_selected = function(branch) {
            return $scope.output = "APPLE! : " + branch.label;
        };
        treedata_avm = [{
            label: '深圳龙澄高科环保有限公司',
            children: [{
                label: '大浪基地',
				children: ['粤B3UB55', '粤B3UB56', '粤B3UB57'],
                data: {
                    description: "大浪运营基地"
                }
            }, {
                label: '深圳总部',
				children: ['粤B3UB58', '粤B3UB59', '粤B3UB60'],
                data: {
                    description: "Felis catus"
                }
            }, {
                label: '四会基地',
				children: ['粤B3UB61', '粤B3UB62', '粤B3UB63'],
                data: {
                    description: "四会运营基地"
                }
            }]
        }, {
            label: '深圳xx环保技术有限公司',
            data: {
                definition: "A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.",
                data_can_contain_anything: true
            },
            onSelect: function(branch) {
                return $scope.output = "Vegetable: " + branch.data.definition;
            },
            children: [{
                label: 'Oranges'
            }, {
                label: 'Apples',
                children: [{
                    label: 'Granny Smith',
                    onSelect: apple_selected
                }, {
                    label: 'Red Delicous',
                    onSelect: apple_selected
                }, {
                    label: 'Fuji',
                    onSelect: apple_selected
                }]
            }]
        }, {
            label: '深圳AAA环保技术有限公司',
            children: [{
                label: 'Rock',
                children: ['Igneous', 'Sedimentary', 'Metamorphic']
            }, {
                label: 'Metal',
                children: ['Aluminum', 'Steel', 'Copper']
            }, {
                label: 'Plastic',
                children: [{
                    label: 'Thermoplastic',
                    children: ['polyethylene', 'polypropylene', 'polystyrene', ' polyvinyl chloride']
                }, {
                    label: 'Thermosetting Polymer',
                    children: ['polyester', 'polyurethane', 'vulcanized rubber', 'bakelite', 'urea-formaldehyde']
                }]
            }]
        }];
        treedata_geography = [{
            label: 'North America',
            children: [{
                label: 'Canada',
                children: ['Toronto', 'Vancouver']
            }, {
                label: 'USA',
                children: ['New York', 'Los Angeles']
            }, {
                label: 'Mexico',
                children: ['Mexico City', 'Guadalajara']
            }]
        }, {
            label: 'South America',
            children: [{
                label: 'Venezuela',
                children: ['Caracas', 'Maracaibo']
            }, {
                label: 'Brazil',
                children: ['Sao Paulo', 'Rio de Janeiro']
            }, {
                label: 'Argentina',
                children: ['Buenos Aires', 'Cordoba']
            }]
        }];
        $scope.my_data = treedata_avm;
        $scope.try_changing_the_tree_data = function() {
            if ($scope.my_data === treedata_avm) {
                return $scope.my_data = treedata_geography;
            } else {
                return $scope.my_data = treedata_avm;
            }
        };
        $scope.my_tree = tree = {};
        $scope.try_async_load = function() {
            $scope.my_data = [];
            $scope.doing_async = true;
            return $timeout(function() {
                if (Math.random() < 0.5) {
                    $scope.my_data = treedata_avm;
                } else {
                    $scope.my_data = treedata_geography;
                }
                $scope.doing_async = false;
                return tree.expand_all();
            }, 1000);
        };
        return $scope.try_adding_a_branch = function() {
            var b;
            b = tree.get_selected_branch();
            return tree.add_branch(b, {
                label: 'New Branch',
                data: {
                    something: 42,
                    "else": 43
                }
            });
        };
    });

}).call(this);