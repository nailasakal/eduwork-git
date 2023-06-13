Feature: Search Feature
    As a valid user
    I want to do a search
    Scenario: search
        Given I open homepage
        When I type in the search field
        Then I should see search result

