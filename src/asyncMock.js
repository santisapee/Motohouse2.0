const products = [
    {
      id: 1,
      title: 'Kawasaki Ninja',
      price: '10000',
      category: 'deportiva',
      description: 'Cilindrada: Alta, Ruta',
      image:
        'https://kawasakicapital.com.mx/cdn/shop/files/ninja400_abs_krt3_300x300.jpg?v=1699056034',
    },
    {
      id: 2,
      title: 'Ktm Adventure',
      price: '12000',
      category: 'trial',
      description: 'Cilindrada: Media, Viaje',
      image:
        'https://www.repuestos-ktm.es/thumbs/ktm/ident_photos/300_300/F5303V6_KTM_Adventure_390_2022.jpg',
    },
    {
      id: 3,
      title: 'Yamaha',
      price: '5000',
      category: 'naked',
      description: 'Cilindrada: Baja, Ciudad',
      image:
        'https://motosfast.com/cdn/shop/files/MT07_2022_04_2b6aec86-1018-45ee-8c59-33293592e710_300x.jpg?v=1708004616',
    },
  ];
  
  export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
  
  export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
  };
  