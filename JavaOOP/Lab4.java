public class Lab4 {
    
    public String firstName;
    public String lastName;
    private int salary;
    public static String wordPlace = "The Tara";
    public static int freeBeerLeft = 999;


    public Employee(String firstNameInput, String lastNameInput, int salaryInput) {
        firstName = firstNameInput;
        lastName = lastNameInput;
        salary = salaryInput;
    }

    public void hello() {
        System.out.println("Hello " + firstName );
    }

    public int getSalary() {
        return salary;
    }

    public void goodbye() {
        System.out.println("Goodbye " + firstName );
    }

    public int getBeerLeft() {
        return freeBeerLeft;
    }

   }
   
   