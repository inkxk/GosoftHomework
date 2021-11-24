public class Lab7 {
    public static void main(String[] args) {

        int counter = 30;
        if (counter % 2 ==0) {
            do {
                System.out.println(counter);
                counter--;
            } while (counter > 0);    
        } else {
            System.out.println("it's odd number");
        }
        
    }
}
