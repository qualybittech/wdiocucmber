Feature: To check for v2 Login and create case

@v2Login
Scenario Outline: Check for Emailya login
    Given I am on V2 Home page
    When I login using <V2useremail> and <V2password>
    Then I should logged into v2 app sucessfully
    Examples:
        | V2useremail                    | V2password   |
        | bharath.anandaraj@vetology.net | BharathA123$ |

@createcase
Scenario Outline: Check for Emailya login
    Given I am on V2 Home page
    When I login using <V2useremail> and <V2password>
    And I navigate to create case
    And I upload files <filePath>
    Examples:
        | V2useremail                    | V2password   | filePath           |
        | bharath.anandaraj@vetology.net | BharathA123$ |./src/data/12606384.dcm |

