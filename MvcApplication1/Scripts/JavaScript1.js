/// <reference path="angular.js" />



//Model
var countylist = [
    {
      id:0, country: "India", states:
               ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala",
                "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]

    },
    {
      id:1, country: "USA", states:
            ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
                                 "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "North Carolina", "Newyork",
                                "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    }
]


var world = angular.module( "world", [] );
world.ru
//Controllers
world.controller( "countrieslist", function ( $scope ) {

    $scope.status = true;

    $scope.country_states = countylist;
    //Behaviour
    $scope.checkit = function () {
        if ( $scope.countryselect == "" ) {

            $scope.status = true;
            return;
        }
        else
            return $scope.status = false;

    }
    $scope.countries = "";
    //Behaviour
    $scope.getstates = function () {
        if ( $scope.countryselect == "" ) {
            $scope.bgstatus = function () {
                $scope.status = true;
                return "bg-danger"
            }
            return $scope.countries = "";
        }
     //   angular.forEach( $scope.country_states, function ( country_states ) {


     //       if ( $scope.countryselect == country_states.country ) {
     //           $scope.bgstatus = function () {
     //               return "bg-primary"
     //           }
     //           $scope.status = false;
     //           return $scope.countries = country_states;
     //       }
     //   }
        //)


         if ( $scope.countryselect != "" ) {
            console.log( $scope.countryselect );
            return $scope.countries = $scope.country_states[$scope.countryselect];
        }
        else
            return $scope.countries = "";
    }
}


    );
