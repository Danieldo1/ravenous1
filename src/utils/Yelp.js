const apiKey =process.env.REACT_APP_KEY
console.log(apiKey);
const Yelp = {
search(term, location, sortBy) {
return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
    headers: {
    Authorization: `Bearer ${apiKey}`
    }
}).then(response => {
    return response.json();
}).then(jsonResponse => {
    if (jsonResponse.businesses) {
    const businesses = jsonResponse.businesses;
    const randomIndex = Math.floor(Math.random() * businesses.length);
    const randomBusiness = businesses[randomIndex];
    return [{
        id: randomBusiness.id,
        imageSrc: randomBusiness.image_url,
        name: randomBusiness.name,
        address: randomBusiness.location.address1,
        city: randomBusiness.location.city,
        state: randomBusiness.location.state,
        zipCode: randomBusiness.location.zip_code,
        category: randomBusiness.categories[0].title,
        rating: randomBusiness.rating,
        reviewCount: randomBusiness.review_count
    }];
    }
});
}
};

export default Yelp;