const apiKey = 'YOUR_API_KEY';

const Yelp = {
    search(term, location, sortBy, price) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&price=${price}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            console.log(jsonResponse);
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => { return {
                    id: business.id,
                    name: business.name,
                    imageSrc: business.image_url,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    locationSrc: `https://www.google.com/maps/search/?api=1&query=${business.location.address1}%2C${business.location.city}%2C${business.location.state}&query_place_id=${business.id}`,
                    businessSrc: business.url,
                    price: business.price
                };
            })
            }
        })
    }
};

export default Yelp;
