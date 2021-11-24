public class Lab12 {
    public static void main(String[] args) {
        
        String string1 = "You and Me";
        String string2 = " you and me ";

        // number1
        if ( string1.equals(string2) ) {
            System.out.println("Equal");
        } else {
            System.out.println("Not Equal");
        }

        // number2
        if ( string1.contains(string2) ) {
            System.out.println("Contain");
        } else {
            System.out.println("Not Contain");
        }

        // number3
        System.out.println("Word 1 length: " + string1.length());
        System.out.println("Word 2 length: " + string2.length());

        // number4
        System.out.println(string1.substring(0, 4));
        System.out.println(string2.substring(0, 4));

        // number5
        System.out.println(string1.trim());
        System.out.println(string2.trim());

        // number6
        System.out.println(string1.toUpperCase());
        System.out.println(string2.toUpperCase());

        // number7
        System.out.println(string2.toUpperCase().trim());
        
    }
}
