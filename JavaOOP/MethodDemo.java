public class MethodDemo {
  public static int specialBonus = 100;

  public static void main(String[] args) {
    //int variableFromMethod = add(1,2);
    //System.out.println(variableFromMethod);
  
    int ans = add(3,4);
    System.out.println(ans);
    int ans2 = add(ans,2);
    System.out.println(ans2);
    int ans3 = add(ans2,10,10);
    System.out.println(ans3);
    int ans4 = subtract(ans3,3);
    System.out.println(ans4);
    int ans5 = addAndSubtract(3,4,1);
    System.out.println(ans5);
    String ans6 = add("123","456");
  }
  public static int add(int a, int b) {
    int answer = (a + b) * 2;

    return specialBonus + answer;
  } 
  public static int add(int a, int b, int c) {
    int answer = a+b+c;

    return specialBonus + answer;
  } 
  public static String add(String a, String b) {
    String answer = a+b;
    return specialBonus + answer;
  }
  public static int subtract(int a, int b) {
    int answer = a-b;

    return specialBonus + answer;
  }
  public static int addAndSubtract(int a, int b, int c) {
    int firstAnswer = add(a, b);
    int secondAnswer = subtract(firstAnswer, c);
    return specialBonus + secondAnswer;
  }

  public static int multiply(int a, int b) {
    int answer = a * b;

    return specialBonus + answer;
  }

  public static int dividedBy(int a, int b) {
    int answer = a / b;

    return specialBonus + answer;
  }

}   