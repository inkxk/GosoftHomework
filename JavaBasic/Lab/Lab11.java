public class Lab11 {

    public static void methodNotReturn() {
        System.out.println("This method is not return anything");
    }

    public static int methodReturn(int number) {
        return number * 2;
    }

    public static void main(String[] args) {
        methodNotReturn();
        System.out.println(methodReturn(5));
    }
}
