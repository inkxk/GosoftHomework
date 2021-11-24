public class Lab2 {

    public static void bark() {
        var dogName = "iBo";
        System.out.println("The Dog name = " + dogName + " bark");
    }


    public static void main(String[] args) {
        
        bark();

        int myInt = 5;
        float myFloat = 5.00;
        double myDouble = 25.00;
        char myChar = 'X';

        int newInt = (int) myFloat;
        float newFloat = (float) myInt;
        float nextFloat = (float) myDouble;
        int nextInt = (int) myChar;

        System.out.println(newInt);
        System.out.println(newFloat);
        System.out.println(nextFloat);
        System.out.println(nextInt);

        final String hello = "Hello";
        // hello = "World";
    }
}
