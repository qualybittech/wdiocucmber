Feature: To check for emailya Login

@emailya 
Scenario Outline: Check for Emailya login
    Given I am on emailya login page
    When I login with <useremail> and <emailyapassword>
    Then I should logged into emailya app sucessfully
    Examples:
        | useremail | emailyapassword |
        | 0209harrypotter@gmail.com | Haaaashini@98 |
