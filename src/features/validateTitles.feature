Feature: To check for valid titles for each pages

@v2title
Scenario Outline: To verify valid title for each page
    Given I am on V2 Home page
    When I login using <V2useremail> and <V2password>
    Then I should navigate and extract title for each page
    Examples:
        | V2useremail                    | V2password |
        | bharath.anandaraj@vetology.net | BharathA123$ |
