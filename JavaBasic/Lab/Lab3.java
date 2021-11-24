public class Lab3 {
    public static void main(String[] args) {
        
        int i = 20;

        i++;
        i++;
        i++;
        i++;
        i++;
        System.out.println(i);

        i--;
        i--;
        i--;
        i--;
        i--;
        System.out.println(i);

        float myFloat = (float) 5.0;
        char myChar = 'x';

        if (myFloat > 0 && myFloat < 10) {
            System.out.println(myFloat);
        }

        if (myChar == 'x' || myChar != 'y') {
            System.out.println(myChar);
        }

    }
}
