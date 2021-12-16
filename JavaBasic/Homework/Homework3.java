public class Homework3 {
    
    public static void draw9(int n) {
        for (int i = 0; i < n; i++) {
            System.out.println(i * 2);
        }
    }

    public static void draw10(int n) {
        for (int i = 1; i <= n; i++) {
            System.out.println(i * 2);
        }
    }

    public static void draw11(int n) {
        for (int i = 1; i <= n; i++) {
            int start = i;
            int count = 1;
            for (int x = 1; x <= n; x++) {
                System.out.print(start * count);
                count++;
            }
            System.out.println("");
        }
    }

    public static void draw12(int n) {
        int count = 1;
        for (int i = 1; i <= n; i++) {
            for (int x = 1; x <= n; x++) {
                if (count == x) {
                    System.out.print("-");
                } else {
                    System.out.print("*");
                }
            }
            count++;
            System.out.println("");
        }
    }

    public static void draw13(int n) {
        int count = n;
        for (int i = 1; i <= n; i++) {
            for (int x = 1; x <= n; x++) {
                if (count == x) {
                    System.out.print("-");
                } else {
                    System.out.print("*");
                }
            }
            count--;
            System.out.println("");
        }
    }

    public static void draw14(int n) {
        for (int i = n; i > 0; i--) {
            for (int x = n; x >= 1; x--) {
                if (i > x) {
                    System.out.print("-");
                } else {
                    System.out.print("*");
                }
            }
            System.out.println("");
        }
    }

    public static void draw15(int n) {
        for (int i = 0; i < n; i++) {
            for (int x = n; x > 0; x--) {
                if (i < x){
                    System.out.print("*");
                } else {
                    System.out.print("-");
                }
            }
            System.out.println("");
        }
    }

    public static void draw16(int n) {
        for (int i = 0; i < n; i++) {
            for (int x = 0; x < n; x++) {
                if (x > i) {
                    System.out.print("-");
                } else {
                    System.out.print("*");
                }
            }
            System.out.println("");
        }
        for (int i = n; i > 1; i--) {
            for (int x = 0; x < n; x++) {
                if (x < i - 1){
                    System.out.print("*");
                } else {
                    System.out.print("-");
                }
            }
            System.out.println("");
        }
    }

    public static void draw17(int n) {
        for (int i = 1; i < n + 1; i++) {
            for (int x = 1; x < n + 1; x++) {
                if (x > i) {
                    System.out.print("-");
                } else {
                    System.out.print(i);
                }
            }
            System.out.println("");
        }
        for (int i = n; i > 1; i--) {
            for (int x = 0; x < n; x++) {
                if (x < i - 1){
                    System.out.print(i - 1);
                } else {
                    System.out.print("-");
                }
            }
            System.out.println("");
        }
    }

    public static void main(String[] args) {
        // draw9();
        // draw10();
        // draw11();
        // draw12();
        // draw13();
        // draw14();
        // draw15();
        // draw16();
        draw17();
    }

}