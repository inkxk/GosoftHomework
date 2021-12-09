public class Product extends ProductAbstract implements InterfaceProduct {

    public Product(String id, String name, int price) {
        super.ID = id;
        super.name = name;
        super.price = price;
    }

    @Override
    public String toString() {
        return "Product [ID=" + ID + ", Price=" + price + ", name=" + name + "]";
    }

    @Override
    public void showData() {
        System.out.println(super.ID);
        System.out.println(super.name);
        System.out.println(super.price);
    }

}
