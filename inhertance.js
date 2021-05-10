class Mkulima{
    constructor(farms,vendors,products,orders){ 
        this.farms = farms;
        this.products = products;
        this.vendors = vendors;
       
        
        }
    addFarm(farmId,name,farmer,phone,address){ 
        let shamba={farmId:farmId,name:name,farmer:farmer,phone:phone,address:address}
        this.farms.unshift(shamba)
         return this.farms
    } 

     removeFarm(farmId){ 
         let plantation=this.farms.find(plantation=>plantation.farmId==farmId)
         
         return delete this.farms[plantation]
          
    }
      updateFarm (farmId,name,farmer,phone,address){
         let anyFarm=this.farms.find(anyFarm=>anyFarm.name=="profession")
        anyFarm={farmId:farmId,name:name,farmer:farmer,phone:phone,address:address}
        return anyFarm
    }   
    getFarm(farmId){
        let farm=this.farms.find(farm=>farm.farmId==farmId)
        return farm
    }   
    addProduct(productId,name,price){
        var product={
            productId:productId,
            name:name,
            price:price
        }
        this.products.unshift (product)      
        return this.products
    }
    removeProduct(productId){
        let product=this.products.find(product=>product.productId==productId)
        return delete this.products[product]
    }  
    updateProduct(productId,name,price){
        let newProduct=this.products.find(newProduct=>newProduct.productId==954)
        newProduct={productId:productId,name:name,price:price}
    return newProduct
    }  
    getProduct(productId){
        let product=this.products.find(product=>product.productId==productId)
        return product
    } 
    printProducts(name,price){
        for(var items of this.products)
        console.log([`${items.name}:${items.price}`])
    }
    calculateOrderCost(productId,quantity){
        let product=this.products.find(product=>product.productId==productId)
        return product.price*quantity
    }
    }
    var solio=new Mkulima([],[],[])
    console.log(solio.addFarm(508,"agaciro","Kabatesi","078123479","Huye"))
    console.log(solio.addFarm(250,"ubumwe","Keza","0781405420","Langatha"))
    console.log(solio.addFarm(111,"Kizungu","Ineza","078542395","Kagugu"))
    

    console.log(solio.removeFarm(508))

    console.log(solio.updateFarm(954,"coffeefarm","Nandase","0788455674","Musoga"))

    console.log(solio.getFarm(954))

    console.log(solio.addProduct(9994,"soja",580))
    console.log(solio.addProduct(5077,"kiwi",766))
    console.log(solio.addProduct(9080,"mango",130))
    console.log(solio.addProduct(1050,"cassava",150))

    console.log(solio.removeProduct(5077))

    console.log(solio.updateProduct(8807,"tea",520))

    console.log(solio.getProduct(9994))

solio.printProducts()

    console.log(solio.calculateOrderCost(1050,12))
