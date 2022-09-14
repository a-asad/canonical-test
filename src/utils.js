const API_URL = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"

export const getBlogPosts = async () => {
    try{
        let response = await fetch(API_URL);
        response = await response.json();
        return response;
    }
    catch(e){
        // add respective error handling strategy
    }
    return null;
}

export const formatDateString = (date) => {
    date = new Date(Date.parse(date));
    date = date.toLocaleDateString(undefined, {dateStyle: "long"});
    return date;
}

export const getCategory = (post) => {
    const wpTerm = post._embedded["wp:term"];
    return wpTerm[2].length ? wpTerm[2][0].name : wpTerm[1][0].name;
}
