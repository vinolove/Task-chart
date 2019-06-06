Feature: Counter App

   While clicking button counter will count
    Scenario: Initial value
        Given mount counter
        When Initialy
        Then show 0


    Scenario: Clicking decrement
        Given mount counter
        When clicking - 
        Then showing -1

    Scenario: Clicking Increment
        Given mount counter
        When clicking +
        Then showing 1