Feature: To verify the Dashboard content

@dashboard
Scenario Outline:
    Given I am on emailya login page
    And I login with <emailyauser> and <emailyapassword>
    Then I should verify dashboard contents <name> and <credit>
        Examples:
            |emailyauser                | emailyapassword |name | credit|
            | 0209harrypotter@gmail.com | Haaaashini@98   |harry |499999 | 


