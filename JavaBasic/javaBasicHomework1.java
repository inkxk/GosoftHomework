/**
 * javaBasicHomework1
 */
public class javaBasicHomework1 {
    
    public static void draw1(int n) {
        for (int star = 0; star < n; star++) {
            System.out.print('*');
        }
    }

    public static void draw2(int n) {
        for (int line = 0; line < n; line++) {
            for (int star = 0; star < n; star++) {
                System.out.print('*');
            }   
            System.out.print('\n');
        }
    }

    public static void draw3(int n) {
        for (int line = 1; line <= n; line++) {
            for (int number = 1; number <= n; number++) {
                System.out.print(number);
            }
            System.out.print('\n');
        }
    }

    public static void draw4(int n) {
        for (int line = 1; line <= n; line++) {
            for (int number = n; number > 0; number--) {
                System.out.print(number);
            }
            System.out.print('\n');
        }
    }

    public static void draw5(int n) {
        for (int line = 1; line <= n; line++) {
            for (int i = 1; i <= n; i++) {
                System.out.print(line);
            }
            System.out.print('\n');
        }
    }

    public static void draw6(int n) {
        for (int line = n; line > 0; line--) {
            for (int i = 1; i <= n; i++) {
                System.out.print(line);
            }
            System.out.print('\n');
        }
    }

    public static void draw7(int n) {
        for (int line = 1; line <= n; line++) {
            for (int i = 1; i <= n; i++) {
                System.out.print(i + (n * (line - 1)));
            } 
            System.out.print('\n');
        }
    }

    public static void draw8(int n) {
        for (int line = 1; line <= n; line++) {
            for (int i = 1; i <= n; i++) {
                System.out.print((n * n) - (i + n * (line - 1)) + 1);
            }  
            System.out.print('\n');
        }
    }

    public static void main(String[] args) {
        draw8(4);
    }

}