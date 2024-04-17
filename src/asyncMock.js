const products = [
    {
      id: 1,
      title: 'Kawasaki Ninja',
      price: '10000',
      categories: 'deportiva',
      description: 'Cilindrada: 400cc',
      image:
        'https://aws.kawasaki-la-administration.com//ContentStorage/KLA/ProductTrimGroup/2017/2843a57e-27d0-42e2-9a2d-dd7619c2badc.png?w=300',
    },
    {
      id: 2,
      title: 'Kawasaki Versys',
      price: '22000',
      categories: 'trial',
      description: 'Cilindrada: 998cc',
      image:
        'https://aws.kawasaki-la-administration.com//ContentStorage/KLA/ProductTrimGroup/33/f23aacff-6632-4bde-b900-44c8af50ee98.png?w=300',
    },
    {
      id: 3,
      title: 'Vulcan Vaquero',
      price: '30000',
      categories: 'viaje',
      description: 'Cilindrada: 1700cc',
      image:
        'https://aws.kawasaki-la-administration.com//ContentStorage/KLA/ProductTrimGroup/66/b47c380b-cac4-492f-8aea-f0cd894a4240.png?w=300',
    },
    {
      id: 4,
      title: 'Kawasaki Z900',
      price: '19000',
      categories: 'naked',
      description: 'Cilindrada: 900cc',
      image:
        'https://aws.kawasaki-la-administration.com//ContentStorage/KLA/ProductTrimGroup/74/db9b6084-1f19-47e5-9f48-6d93f0f4fc4d.png?w=300',
    },
    {
      id: 5,
      title: 'Teryx KRX',
      price: '52000',
      categories: 'trial',
      description: 'Cilindrada: 999cc',
      image:
        'https://aws.kawasaki-la-administration.com//ContentStorage/KLA/ProductTrimGroup/1004/fe23d465-f970-41d8-a63c-a67993270d8a.png?w=300',
    },
  ];
  
  export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
  
  export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
  };

  export const getProductsByCategory = (categories) => {
    return products.filter((cat) => cat.categories === categories);
  };
  