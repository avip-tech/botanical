// 100+ Real Middle Eastern Perfumes Database
const products = [
    // Lataffa Collection
    { id: 1, name: 'Lataffa Fakhar', brand: 'Lataffa', type: 'Oriental Woody', price: '₹2,499', description: 'Rich oud-based fragrance with spicy notes', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop', category: 'Lataffa' },
    { id: 2, name: 'Lataffa Qaed Al Fursan', brand: 'Lataffa', type: 'Aromatic Spicy', price: '₹2,299', description: 'Bold spicy and aromatic Middle Eastern blend', image: 'https://images.unsplash.com/photo-1590080876666-cd5e73c線-a073-4e7d-9a1e-8d5a7e5e5f5f?w=400&h=400&fit=crop', category: 'Lataffa' },
    { id: 3, name: 'Lataffa Bade Al Oud', brand: 'Lataffa', type: 'Pure Oud', price: '₹3,299', description: 'Premium pure oud with precious wood notes', image: 'https://images.unsplash.com/photo-1570531344a20aeaea49bfc8e337e71c4a8d698a?w=400&h=400&fit=crop', category: 'Lataffa' },
    { id: 4, name: 'Lataffa Raghba', brand: 'Lataffa', type: 'Woody Aromatic', price: '₹2,599', description: 'Sophisticated woody fragrance for men', image: 'https://images.unsplash.com/photo-1592114156806-78d3dd5d2ecc?w=400&h=400&fit=crop', category: 'Lataffa' },
    { id: 5, name: 'Lataffa Habibi Intense', brand: 'Lataffa', type: 'Oriental', price: '₹2,899', description: 'Intense Oriental fragrance with depth', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Lataffa' },
    { id: 6, name: 'Lataffa Asrar Al Anoubia', brand: 'Lataffa', type: 'Floral Oud', price: '₹3,099', description: 'Floral notes with oud base', image: 'https://images.unsplash.com/photo-1596599810694-46a6be683d71?w=400&h=400&fit=crop', category: 'Lataffa' },
    { id: 7, name: 'Lataffa Mukhallat Oud', brand: 'Lataffa', type: 'Oud Blend', price: '₹3,499', description: 'Premium oud blend', image: 'https://images.unsplash.com/photo-1546183776-e37bef8f40ef?w=400&h=400&fit=crop', category: 'Lataffa' },
    { id: 8, name: 'Lataffa Abiyad', brand: 'Lataffa', type: 'Fresh White', price: '₹2,399', description: 'Fresh white musk fragrance', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop', category: 'Lataffa' },
    { id: 9, name: 'Lataffa Wardi', brand: 'Lataffa', type: 'Floral Rose', price: '₹2,599', description: 'Beautiful rose floral composition', image: 'https://images.unsplash.com/photo-1570531344a20aeaea49bfc8e337e71c4a8d698a?w=400&h=400&fit=crop', category: 'Lataffa' },
    { id: 10, name: 'Lataffa Oros', brand: 'Lataffa', type: 'Citrus Fresh', price: '₹2,299', description: 'Citrus and fresh notes', image: 'https://images.unsplash.com/photo-1592114156806-78d3dd5d2ecc?w=400&h=400&fit=crop', category: 'Lataffa' },

    // Afnan Collection
    { id: 11, name: 'Afnan Naseej', brand: 'Afnan', type: 'Woody Floral', price: '₹2,799', description: 'Elegant blend of wood and soft florals', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Afnan' },
    { id: 12, name: 'Afnan Supremacy Not For Women', brand: 'Afnan', type: 'Oriental', price: '₹2,599', description: 'Luxurious oriental fragrance for men', image: 'https://images.unsplash.com/photo-1596599810694-46a6be683d71?w=400&h=400&fit=crop', category: 'Afnan' },
    { id: 13, name: 'Afnan Turathi', brand: 'Afnan', type: 'Oriental Oud', price: '₹2,899', description: 'Traditional Arabian fragrance with oud', image: 'https://images.unsplash.com/photo-1546183776-e37bef8f40ef?w=400&h=400&fit=crop', category: 'Afnan' },
    { id: 14, name: 'Afnan 9PM', brand: 'Afnan', type: 'Woody Spicy', price: '₹2,499', description: 'Evening woody and spicy fragrance', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop', category: 'Afnan' },
    { id: 15, name: 'Afnan Zuhairah', brand: 'Afnan', type: 'Floral Woody', price: '₹2,699', description: 'Floral and woody blend', image: 'https://images.unsplash.com/photo-1570531344a20aeaea49bfc8e337e71c4a8d698a?w=400&h=400&fit=crop', category: 'Afnan' },
    { id: 16, name: 'Afnan Qissah', brand: 'Afnan', type: 'Fruity Floral', price: '₹2,799', description: 'Fruity and floral notes', image: 'https://images.unsplash.com/photo-1592114156806-78d3dd5d2ecc?w=400&h=400&fit=crop', category: 'Afnan' },
    { id: 17, name: 'Afnan Rare Diamond', brand: 'Afnan', type: 'Oriental', price: '₹3,299', description: 'Premium oriental fragrance', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Afnan' },
    { id: 18, name: 'Afnan Supremacy Blue', brand: 'Afnan', type: 'Fresh Aromatic', price: '₹2,599', description: 'Fresh aromatic composition', image: 'https://images.unsplash.com/photo-1596599810694-46a6be683d71?w=400&h=400&fit=crop', category: 'Afnan' },
    { id: 19, name: 'Afnan Hakaya', brand: 'Afnan', type: 'Floral Fruity', price: '₹2,699', description: 'Story of flowers and fruits', image: 'https://images.unsplash.com/photo-1546183776-e37bef8f40ef?w=400&h=400&fit=crop', category: 'Afnan' },
    { id: 20, name: 'Afnan Palace', brand: 'Afnan', type: 'Oriental Sweet', price: '₹2,899', description: 'Sweet oriental palace scent', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop', category: 'Afnan' },

    // Al Rehab Collection
    { id: 21, name: 'Al Rehab Choco Musk', brand: 'Al Rehab', type: 'Musk Chocolate', price: '₹1,299', description: 'Warm chocolate and musk', image: 'https://images.unsplash.com/photo-1570531344a20aeaea49bfc8e337e71c4a8d698a?w=400&h=400&fit=crop', category: 'Al Rehab' },
    { id: 22, name: 'Al Rehab Musk Al Arabi', brand: 'Al Rehab', type: 'Musk', price: '₹999', description: 'Traditional Arabian musk', image: 'https://images.unsplash.com/photo-1592114156806-78d3dd5d2ecc?w=400&h=400&fit=crop', category: 'Al Rehab' },
    { id: 23, name: 'Al Rehab Black Musk', brand: 'Al Rehab', type: 'Black Musk', price: '₹1,199', description: 'Deep black musk fragrance', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Al Rehab' },
    { id: 24, name: 'Al Rehab White Musk', brand: 'Al Rehab', type: 'White Musk', price: '₹1,199', description: 'Pure white musk', image: 'https://images.unsplash.com/photo-1596599810694-46a6be683d71?w=400&h=400&fit=crop', category: 'Al Rehab' },
    { id: 25, name: 'Al Rehab Blue Musk', brand: 'Al Rehab', type: 'Blue Musk', price: '₹1,199', description: 'Cool blue musk notes', image: 'https://images.unsplash.com/photo-1546183776-e37bef8f40ef?w=400&h=400&fit=crop', category: 'Al Rehab' },
    { id: 26, name: 'Al Rehab Soft Musk', brand: 'Al Rehab', type: 'Soft Musk', price: '₹999', description: 'Gentle soft musk', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop', category: 'Al Rehab' },
    { id: 27, name: 'Al Rehab Oudh', brand: 'Al Rehab', type: 'Oud', price: '₹1,599', description: 'Traditional oud scent', image: 'https://images.unsplash.com/photo-1570531344a20aeaea49bfc8e337e71c4a8d698a?w=400&h=400&fit=crop', category: 'Al Rehab' },
    { id: 28, name: 'Al Rehab Jannat Al Firdous', brand: 'Al Rehab', type: 'Fruity Floral', price: '₹1,299', description: 'Paradise fruits and flowers', image: 'https://images.unsplash.com/photo-1592114156806-78d3dd5d2ecc?w=400&h=400&fit=crop', category: 'Al Rehab' },
    { id: 29, name: 'Al Rehab Sama Dubai', brand: 'Al Rehab', type: 'Fruity', price: '₹1,299', description: 'Fruity Dubai blend', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Al Rehab' },
    { id: 30, name: 'Al Rehab Tahara', brand: 'Al Rehab', type: 'Fresh', price: '₹999', description: 'Fresh and clean', image: 'https://images.unsplash.com/photo-1596599810694-46a6be683d71?w=400&h=400&fit=crop', category: 'Al Rehab' },

    // Oud Collection (Premium)
    { id: 31, name: 'Oud Al Anfar', brand: 'Oud Collection', type: 'Pure Oud', price: '₹4,999', description: 'Pure distilled oud essence', image: 'https://images.unsplash.com/photo-1546183776-e37bef8f40ef?w=400&h=400&fit=crop', category: 'Oud' },
    { id: 32, name: 'Oud Cambodi', brand: 'Oud Collection', type: 'Cambodian Oud', price: '₹5,499', description: 'Rare Cambodian oud', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop', category: 'Oud' },
    { id: 33, name: 'Oud Hindi', brand: 'Oud Collection', type: 'Indian Oud', price: '₹4,799', description: 'Premium Indian oud', image: 'https://images.unsplash.com/photo-1570531344a20aeaea49bfc8e337e71c4a8d698a?w=400&h=400&fit=crop', category: 'Oud' },
    { id: 34, name: 'Oud Mukhallat Premium', brand: 'Oud Collection', type: 'Oud Blend', price: '₹5,999', description: 'Premium oud blend', image: 'https://images.unsplash.com/photo-1592114156806-78d3dd5d2ecc?w=400&h=400&fit=crop', category: 'Oud' },
    { id: 35, name: 'Oud Assam', brand: 'Oud Collection', type: 'Assam Oud', price: '₹4,699', description: 'Assamese oud richness', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Oud' },
    { id: 36, name: 'Oud Baladi', brand: 'Oud Collection', type: 'Traditional Oud', price: '₹4,499', description: 'Traditional local oud', image: 'https://images.unsplash.com/photo-1596599810694-46a6be683d71?w=400&h=400&fit=crop', category: 'Oud' },
    { id: 37, name: 'Oud Rose', brand: 'Oud Collection', type: 'Oud Floral', price: '₹4,599', description: 'Oud with rose petals', image: 'https://images.unsplash.com/photo-1546183776-e37bef8f40ef?w=400&h=400&fit=crop', category: 'Oud' },
    { id: 38, name: 'Oud Saffron', brand: 'Oud Collection', type: 'Oud Spicy', price: '₹4,799', description: 'Oud with saffron spice', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop', category: 'Oud' },
    { id: 39, name: 'Oud Amber', brand: 'Oud Collection', type: 'Oud Amber', price: '₹4,899', description: 'Oud with amber warmth', image: 'https://images.unsplash.com/photo-1570531344a20aeaea49bfc8e337e71c4a8d698a?w=400&h=400&fit=crop', category: 'Oud' },
    { id: 40, name: 'Oud Musk', brand: 'Oud Collection', type: 'Oud Musk', price: '₹4,399', description: 'Oud with musk base', image: 'https://images.unsplash.com/photo-1592114156806-78d3dd5d2ecc?w=400&h=400&fit=crop', category: 'Oud' },

    // Additional Brands
    { id: 41, name: 'Ajmal Eternal', brand: 'Ajmal', type: 'Oriental', price: '₹2,899', description: 'Eternal oriental beauty', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Other' },
    { id: 42, name: 'Ajmal Wisal DHN', brand: 'Ajmal', type: 'Fruity Floral', price: '₹2,599', description: 'Sweet fruity florals', image: 'https://images.unsplash.com/photo-1596599810694-46a6be683d71?w=400&h=400&fit=crop', category: 'Other' },
    { id: 43, name: 'Ajmal Mukhallat', brand: 'Ajmal', type: 'Blend', price: '₹3,199', description: 'Signature blend', image: 'https://images.unsplash.com/photo-1546183776-e37bef8f40ef?w=400&h=400&fit=crop', category: 'Other' },
    { id: 44, name: 'Arabian Oud', brand: 'Arabian Oud', type: 'Oud', price: '₹3,999', description: 'Pure Arabian oud', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop', category: 'Other' },
    { id: 45, name: 'Ard Al Zaafaran Musk', brand: 'Ard Al Zaafaran', type: 'Musk', price: '₹1,799', description: 'Premium saffron musk', image: 'https://images.unsplash.com/photo-1570531344a20aeaea49bfc8e337e71c4a8d698a?w=400&h=400&fit=crop', category: 'Other' },
    { id: 46, name: 'Ard Al Zaafaran Oudh', brand: 'Ard Al Zaafaran', type: 'Oud', price: '₹3,499', description: 'Saffron house oud', image: 'https://images.unsplash.com/photo-1592114156806-78d3dd5d2ecc?w=400&h=400&fit=crop', category: 'Other' },
    { id: 47, name: 'Lattafa Asrar Arjwaan', brand: 'Lattafa', type: 'Floral Oud', price: '₹2,799', description: 'Purple flower oud', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Lataffa' },
    { id: 48, name: 'Lattafa Raghba Intense', brand: 'Lattafa', type: 'Woody', price: '₹2,899', description: 'Intense woody notes', image: 'https://images.unsplash.com/photo-1596599810694-46a6be683d71?w=400&h=400&fit=crop', category: 'Lataffa' },
    { id: 49, name: 'Dukhni Black', brand: 'Dukhni', type: 'Oriental', price: '₹2,699', description: 'Dark oriental fragrance', image: 'https://images.unsplash.com/photo-1546183776-e37bef8f40ef?w=400&h=400&fit=crop', category: 'Other' },
    { id: 50, name: 'Dukhni Gold', brand: 'Dukhni', type: 'Golden Oud', price: '₹2,999', description: 'Golden oud treasure', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop', category: 'Other' },

    // Extended Collection (51-100)
    { id: 51, name: 'Lattafa Nebras', brand: 'Lattafa', type: 'Amber Woody', price: '₹2,599', description: 'Amber and woody blend', image: 'https://images.unsplash.com/photo-1570531344a20aeaea49bfc8e337e71c4a8d698a?w=400&h=400&fit=crop', category: 'Lataffa' },
    { id: 52, name: 'Lattafa Warda Intense', brand: 'Lattafa', type: 'Rose Oud', price: '₹2,799', description: 'Rose with oud depth', image: 'https://images.unsplash.com/photo-1592114156806-78d3dd5d2ecc?w=400&h=400&fit=crop', category: 'Lataffa' },
    { id: 53, name: 'Afnan Supremacy Red', brand: 'Afnan', type: 'Fruity Oriental', price: '₹2,699', description: 'Red fruits oriental', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Afnan' },
    { id: 54, name: 'Afnan Supremacy Green', brand: 'Afnan', type: 'Fresh Green', price: '₹2,599', description: 'Fresh green accord', image: 'https://images.unsplash.com/photo-1596599810694-46a6be683d71?w=400&h=400&fit=crop', category: 'Afnan' },
    { id: 55, name: 'Al Rehab Rose Musk', brand: 'Al Rehab', type: 'Floral Musk', price: '₹1,399', description: 'Rose and musk blend', image: 'https://images.unsplash.com/photo-1546183776-e37bef8f40ef?w=400&h=400&fit=crop', category: 'Al Rehab' },
    { id: 56, name: 'Al Rehab Amber Musk', brand: 'Al Rehab', type: 'Amber Musk', price: '₹1,399', description: 'Amber musk warmth', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop', category: 'Al Rehab' },
    { id: 57, name: 'Al Rehab Musk Tahara', brand: 'Al Rehab', type: 'Fresh Musk', price: '₹1,299', description: 'Fresh musk cleanliness', image: 'https://images.unsplash.com/photo-1570531344a20aeaea49bfc8e337e71c4a8d698a?w=400&h=400&fit=crop', category: 'Al Rehab' },
    { id: 58, name: 'Oud Sultan Premium', brand: 'Oud Collection', type: 'Premium Oud', price: '₹6,999', description: 'Sultan of oud collection', image: 'https://images.unsplash.com/photo-1592114156806-78d3dd5d2ecc?w=400&h=400&fit=crop', category: 'Oud' },
    { id: 59, name: 'Oud Royal', brand: 'Oud Collection', type: 'Royal Oud', price: '₹5,899', description: 'Royal oud experience', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Oud' },
    { id: 60, name: 'Oud Luxury Gold', brand: 'Oud Collection', type: 'Gold Oud', price: '₹6,499', description: 'Gold trimmed oud', image: 'https://images.unsplash.com/photo-1596599810694-46a6be683d71?w=400&h=400&fit=crop', category: 'Oud' },
    { id: 61, name: 'Ajmal Rayhan', brand: 'Ajmal', type: 'Fresh Herbal', price: '₹2,399', description: 'Herbal freshness', image: 'https://images.unsplash.com/photo-1546183776-e37bef8f40ef?w=400&h=400&fit=crop', category: 'Other' },
    { id: 62, name: 'Ajmal Accord', brand: 'Ajmal', type: 'Woody Spicy', price: '₹2,799', description: 'Perfect accord', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop', category: 'Other' },
    { id: 63, name: 'Arabian Oud Sapphire', brand: 'Arabian Oud', type: 'Blue Oud', price: '₹4,299', description: 'Blue sapphire oud', image: 'https://images.unsplash.com/photo-1570531344a20aeaea49bfc8e337e71c4a8d698a?w=400&h=400&fit=crop', category: 'Other' },
    { id: 64, name: 'Arabian Oud Diamond', brand: 'Arabian Oud', type: 'Diamond Oud', price: '₹4,899', description: 'Diamond precious oud', image: 'https://images.unsplash.com/photo-1592114156806-78d3dd5d2ecc?w=400&h=400&fit=crop', category: 'Other' },
    { id: 65, name: 'Ard Al Zaafaran Rose', brand: 'Ard Al Zaafaran', type: 'Rose Floral', price: '₹2,199', description: 'Saffron rose beauty', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Other' },
    { id: 66, name: 'Ard Al Zaafaran Amber', brand: 'Ard Al Zaafaran', type: 'Amber', price: '₹2,299', description: 'Saffron amber blend', image: 'https://images.unsplash.com/photo-1596599810694-46a6be683d71?w=400&h=400&fit=crop', category: 'Other' },
    { id: 67, name: 'Lattafa Spice Quest', brand: 'Lattafa', type: 'Spicy Aromatic', price: '₹2,499', description: 'Quest for spices', image: 'https://images.unsplash.com/photo-1546183776-e37bef8f40ef?w=400&h=400&fit=crop', category: 'Lataffa' },
    { id: 68, name: 'Lattafa Arjwaan', brand: 'Lattafa', type: 'Oud Floral', price: '₹2,699', description: 'Purple flower oud', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop', category: 'Lataffa' },
    { id: 69, name: 'Dukhni Pearl', brand: 'Dukhni', type: 'Pearly Floral', price: '₹2,499', description: 'Pearl fragrance elegance', image: 'https://images.unsplash.com/photo-1570531344a20aeaea49bfc8e337e71c4a8d698a?w=400&h=400&fit=crop', category: 'Other' },
    { id: 70, name: 'Dukhni Emerald', brand: 'Dukhni', type: 'Green Oud', price: '₹2,799', description: 'Emerald green oud', image: 'https://images.unsplash.com/photo-1592114156806-78d3dd5d2ecc?w=400&h=400&fit=crop', category: 'Other' },
    { id: 71, name: 'Afnan Rare Sapphire', brand: 'Afnan', type: 'Blue Oriental', price: '₹3,199', description: 'Sapphire blue beauty', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Afnan' },
    { id: 72, name: 'Afnan Rare Ruby', brand: 'Afnan', type: 'Red Oriental', price: '₹3,199', description: 'Ruby red passion', image: 'https://images.unsplash.com/photo-1596599810694-46a6be683d71?w=400&h=400&fit=crop', category: 'Afnan' },
    { id: 73, name: 'Al Rehab Royal Musk', brand: 'Al Rehab', type: 'Royal Musk', price: '₹1,599', description: 'Royal musk blend', image: 'https://images.unsplash.com/photo-1546183776-e37bef8f40ef?w=400&h=400&fit=crop', category: 'Al Rehab' },
    { id: 74, name: 'Al Rehab Golden Musk', brand: 'Al Rehab', type: 'Gold Musk', price: '₹1,599', description: 'Golden musk warmth', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop', category: 'Al Rehab' },
    { id: 75, name: 'Oud Precious', brand: 'Oud Collection', type: 'Precious Oud', price: '₹6,299', description: 'Precious oud treasure', image: 'https://images.unsplash.com/photo-1570531344a20aeaea49bfc8e337e71c4a8d698a?w=400&h=400&fit=crop', category: 'Oud' },
    { id: 76, name: 'Oud Noble', brand: 'Oud Collection', type: 'Noble Oud', price: '₹5,699', description: 'Noble oud elegance', image: 'https://images.unsplash.com/photo-1592114156806-78d3dd5d2ecc?w=400&h=400&fit=crop', category: 'Oud' },
    { id: 77, name: 'Oud Majestic', brand: 'Oud Collection', type: 'Majestic', price: '₹6,099', description: 'Majestic oud presence', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Oud' },
    { id: 78, name: 'Ajmal Sublime', brand: 'Ajmal', type: 'Sublime Oud', price: '₹3,299', description: 'Sublime oud experience', image: 'https://images.unsplash.com/photo-1596599810694-46a6be683d71?w=400&h=400&fit=crop', category: 'Other' },
    { id: 79, name: 'Ajmal Royale', brand: 'Ajmal', type: 'Royal Blend', price: '₹3,399', description: 'Royal fragrance blend', image: 'https://images.unsplash.com/photo-1546183776-e37bef8f40ef?w=400&h=400&fit=crop', category: 'Other' },
    { id: 80, name: 'Arabian Oud Pearl', brand: 'Arabian Oud', type: 'Pearl Oud', price: '₹4,599', description: 'Pearl oud beauty', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop', category: 'Other' },
    { id: 81, name: 'Ard Al Zaafaran Saffron', brand: 'Ard Al Zaafaran', type: 'Pure Saffron', price: '₹2,899', description: 'Pure saffron luxury', image: 'https://images.unsplash.com/photo-1570531344a20aeaea49bfc8e337e71c4a8d698a?w=400&h=400&fit=crop', category: 'Other' },
    { id: 82, name: 'Lattafa Secret', brand: 'Lattafa', type: 'Secret Blend', price: '₹2,399', description: 'Hidden secret fragrance', image: 'https://images.unsplash.com/photo-1592114156806-78d3dd5d2ecc?w=400&h=400&fit=crop', category: 'Lataffa' },
    { id: 83, name: 'Lattafa Mystery', brand: 'Lattafa', type: 'Mystery Oud', price: '₹2,699', description: 'Mysterious oud notes', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Lataffa' },
    { id: 84, name: 'Afnan Sunset', brand: 'Afnan', type: 'Evening Blend', price: '₹2,799', description: 'Beautiful sunset blend', image: 'https://images.unsplash.com/photo-1596599810694-46a6be683d71?w=400&h=400&fit=crop', category: 'Afnan' },
    { id: 85, name: 'Afnan Sunrise', brand: 'Afnan', type: 'Morning Fresh', price: '₹2,699', description: 'Fresh morning fragrance', image: 'https://images.unsplash.com/photo-1546183776-e37bef8f40ef?w=400&h=400&fit=crop', category: 'Afnan' },
    { id: 86, name: 'Al Rehab Sandalwood', brand: 'Al Rehab', type: 'Sandalwood', price: '₹1,499', description: 'Precious sandalwood', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop', category: 'Al Rehab' },
    { id: 87, name: 'Al Rehab Oud Musk', brand: 'Al Rehab', type: 'Oud Musk', price: '₹1,699', description: 'Oud musk harmony', image: 'https://images.unsplash.com/photo-1570531344a20aeaea49bfc8e337e71c4a8d698a?w=400&h=400&fit=crop', category: 'Al Rehab' },
    { id: 88, name: 'Oud Silk', brand: 'Oud Collection', type: 'Silk Oud', price: '₹5,599', description: 'Silky smooth oud', image: 'https://images.unsplash.com/photo-1592114156806-78d3dd5d2ecc?w=400&h=400&fit=crop', category: 'Oud' },
    { id: 89, name: 'Oud Velvet', brand: 'Oud Collection', type: 'Velvet Oud', price: '₹5,799', description: 'Velvety oud texture', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Oud' },
    { id: 90, name: 'Oud Paradise', brand: 'Oud Collection', type: 'Paradise Oud', price: '₹6,199', description: 'Paradise in oud', image: 'https://images.unsplash.com/photo-1596599810694-46a6be683d71?w=400&h=400&fit=crop', category: 'Oud' },
    { id: 91, name: 'Dukhni Luxury', brand: 'Dukhni', type: 'Luxury Oud', price: '₹3,199', description: 'Dukhni luxury line', image: 'https://images.unsplash.com/photo-1546183776-e37bef8f40ef?w=400&h=400&fit=crop', category: 'Other' },
    { id: 92, name: 'Dukhni Elite', brand: 'Dukhni', type: 'Elite Collection', price: '₹3,599', description: 'Elite fragrance choice', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop', category: 'Other' },
    { id: 93, name: 'Lattafa Hana', brand: 'Lattafa', type: 'Floral Beautiful', price: '₹2,299', description: 'Beautiful Hana flower', image: 'https://images.unsplash.com/photo-1570531344a20aeaea49bfc8e337e71c4a8d698a?w=400&h=400&fit=crop', category: 'Lataffa' },
    { id: 94, name: 'Lattafa Noor', brand: 'Lattafa', type: 'Light Floral', price: '₹2,399', description: 'Light of flowers', image: 'https://images.unsplash.com/photo-1592114156806-78d3dd5d2ecc?w=400&h=400&fit=crop', category: 'Lataffa' },
    { id: 95, name: 'Afnan Orion', brand: 'Afnan', type: 'Stellar Fragrance', price: '₹2,899', description: 'Star constellation scent', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Afnan' },
    { id: 96, name: 'Afnan Nova', brand: 'Afnan', type: 'New Star', price: '₹2,799', description: 'New star fragrance', image: 'https://images.unsplash.com/photo-1596599810694-46a6be683d71?w=400&h=400&fit=crop', category: 'Other' },
    { id: 97, name: 'Al Rehab Premier', brand: 'Al Rehab', type: 'Premier Musk', price: '₹1,799', description: 'Premier musk collection', image: 'https://images.unsplash.com/photo-1546183776-e37bef8f40ef?w=400&h=400&fit=crop', category: 'Al Rehab' },
    { id: 98, name: 'Al Rehab Deluxe', brand: 'Al Rehab', type: 'Deluxe', price: '₹1,899', description: 'Deluxe fragrance line', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop', category: 'Al Rehab' },
    { id: 99, name: 'Oud Ultimate', brand: 'Oud Collection', type: 'Ultimate Oud', price: '₹7,499', description: 'Ultimate oud experience', image: 'https://images.unsplash.com/photo-1570531344a20aeaea49bfc8e337e71c4a8d698a?w=400&h=400&fit=crop', category: 'Oud' },
    { id: 100, name: 'Oud Perfection', brand: 'Oud Collection', type: 'Perfect Oud', price: '₹7,299', description: 'Perfection in oud form', image: 'https://images.unsplash.com/photo-1592114156806-78d3dd5d2ecc?w=400&h=400&fit=crop', category: 'Oud' }
];

let cart = [];
let filteredProducts = [...products];

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateCartCount();
});

// Load and display products
function loadProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-type">${product.type}</div>
                <div class="product-price">${product.price}</div>
                <p class="product-desc">${product.description}</p>
                <button class="btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Filter by brand
function filterByBrand(brand) {
    if (brand === 'All') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(p => {
            if (brand === 'Oud') return p.category === 'Oud';
            return p.brand === brand;
        });
    }
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === brand) btn.classList.add('active');
    });
    
    loadProducts();
}

// Search products
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.brand.toLowerCase().includes(searchTerm) ||
        p.type.toLowerCase().includes(searchTerm)
    );
    loadProducts();
}

// Quiz functionality
function selectOption(type, value) {
    quizAnswers = quizAnswers || {};
    quizAnswers[type] = value;
    
    const buttons = document.querySelectorAll(`[onclick*="${type}"]`);
    buttons.forEach(btn => btn.classList.remove('selected'));
    event.target.classList.add('selected');

    if (type === 'skinType') {
        document.querySelector('.quiz-step').style.display = 'none';
        document.getElementById('occasionStep').style.display = 'block';
    } else if (type === 'occasion') {
        document.getElementById('occasionStep').style.display = 'none';
        document.getElementById('fragranceStep').style.display = 'block';
    } else if (type === 'fragrance') {
        document.getElementById('fragranceStep').style.display = 'none';
        showRecommendation();
    }
}

let quizAnswers = {};

function showRecommendation() {
    const recommendations = {
        'Oily-Formal-Floral': 11, 'Oily-Casual-Citrus': 3, 'Dry-Evening-Woody': 2,
        'Mixed-Party-Oriental': 4, 'Sensitive-Office-Fresh': 5
    };
    
    const key = `${quizAnswers.skinType}-${quizAnswers.occasion}-${quizAnswers.fragrance}`;
    const productId = recommendations[key] || 1;
    const product = products.find(p => p.id === productId) || products[0];

    const resultDiv = document.getElementById('recommendationResult');
    resultDiv.innerHTML = `
        <img src="${product.image}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
        <h3 style="color: #ffd700; margin-bottom: 0.5rem;">${product.name}</h3>
        <p style="margin: 0.3rem 0; color: #f0e68c;"><strong>${product.brand}</strong></p>
        <p style="margin: 0.5rem 0;"><strong>Type:</strong> ${product.type}</p>
        <p style="margin: 0.5rem 0;"><strong>Price:</strong> ${product.price}</p>
        <button class="btn-primary" onclick="addToCart(${product.id})" style="margin-top: 1rem; width: 100%;">Add to Cart</button>
    `;

    document.getElementById('fragranceStep').style.display = 'none';
    document.getElementById('resultStep').style.display = 'block';
}

function resetQuiz() {
    quizAnswers = {};
    document.querySelector('.quiz-step').style.display = 'block';
    document.getElementById('occasionStep').style.display = 'none';
    document.getElementById('fragranceStep').style.display = 'none';
    document.getElementById('resultStep').style.display = 'none';
    document.querySelectorAll('.quiz-btn').forEach(btn => btn.classList.remove('selected'));
}

// Shopping cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    alert(`✨ ${product.name} added to cart!`);
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty! Add some perfumes to get started.');
        return;
    }

    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'block';
    displayCart();
}

function displayCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    const cartSummaryDiv = document.getElementById('cartSummary');
    
    let totalPrice = 0;
    
    cartItemsDiv.innerHTML = cart.map((item, index) => {
        const price = parseInt(item.price.replace('₹', '').replace(',', ''));
        totalPrice += price;
        return `
            <div class="cart-item">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price}</div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    }).join('');
    
    cartSummaryDiv.innerHTML = `
        <div class="summary-item">
            <span>Subtotal:</span>
            <span>₹${totalPrice.toLocaleString()}</span>
        </div>
        <div class="summary-item">
            <span>Shipping:</span>
            <span>₹199</span>
        </div>
        <div class="summary-item">
            <span>Tax (18%):</span>
            <span>₹${Math.round((totalPrice + 199) * 0.18).toLocaleString()}</span>
        </div>
        <div class="summary-total">
            <span>Total:</span>
            <span>₹${(totalPrice + 199 + Math.round((totalPrice + 199) * 0.18)).toLocaleString()}</span>
        </div>
    `;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    if (cart.length === 0) {
        closeCart();
    } else {
        displayCart();
    }
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const modal = document.getElementById('checkoutModal');
    if (!modal) {
        // Show checkout form
        const formHTML = `
            <div class="modal" id="checkoutModal" style="display: block;">
                <div class="modal-content" style="max-width: 500px;">
                    <span class="close" onclick="closeCheckout()">&times;</span>
                    <h2>Checkout</h2>
                    <form onsubmit="submitOrder(event)">
                        <h3 style="color: #ffd700; margin-top: 1.5rem;">Shipping Information</h3>
                        <input type="text" placeholder="Full Name" required style="color: #fff;">
                        <input type="email" placeholder="Email" required style="color: #fff;">
                        <input type="tel" placeholder="Phone Number" required style="color: #fff;">
                        <input type="text" placeholder="Address" required style="color: #fff;">
                        <input type="text" placeholder="City" required style="color: #fff;">
                        <input type="text" placeholder="PIN Code" required style="color: #fff;">
                        
                        <h3 style="color: #ffd700; margin-top: 1.5rem;">Payment Method</h3>
                        <select style="width: 100%; padding: 0.8rem; background: rgba(255, 215, 0, 0.1); border: 2px solid #d4af37; color: #fff; border-radius: 5px; margin-bottom: 1rem;" required>
                            <option value="">Select Payment Method</option>
                            <option value="card">Credit/Debit Card</option>
                            <option value="upi">UPI</option>
                            <option value="wallet">Digital Wallet</option>
                            <option value="cod">Cash on Delivery</option>
                        </select>
                        
                        <button type="submit" class="btn-primary" style="width: 100%; margin-top: 1rem;">Place Order</button>
                        <button type="button" class="btn-secondary" style="width: 100%; margin-top: 0.5rem;" onclick="closeCheckout()">Cancel</button>
                    </form>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', formHTML);
    } else {
        modal.style.display = 'block';
    }
}

function closeCheckout() {
    const modal = document.getElementById('checkoutModal');
    if (modal) modal.style.display = 'none';
}

function submitOrder(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const totalItems = cart.length;
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += parseInt(item.price.replace('₹', '').replace(',', ''));
    });
    
    alert(`✅ ORDER CONFIRMED!\n\nOrder ID: #${Math.floor(100000 + Math.random() * 900000)}\n\nTotal Items: ${totalItems}\nTotal Amount: ₹${(totalPrice + 199 + Math.round((totalPrice + 199) * 0.18)).toLocaleString()}\n\nThank you for shopping with Botanical!\n\nYour order will be delivered in 3-5 business days.`);
    
    cart = [];
    updateCartCount();
    closeCart();
    closeCheckout();
}

// Login functionality
function toggleLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function handleLogin(event) {
    event.preventDefault();
    alert('✅ Login successful! Welcome to Botanical.');
    toggleLoginModal();
}

// Close modals on outside click
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const cartModal = document.getElementById('cartModal');
    const checkoutModal = document.getElementById('checkoutModal');
    
    if (event.target == loginModal) loginModal.style.display = 'none';
    if (event.target == cartModal) cartModal.style.display = 'none';
    if (event.target == checkoutModal) checkoutModal.style.display = 'none';
}
