import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    const { data } = await api.get(`/posts`, {
        params: {
            id: `eq.${id}`,
        },
    });

    if (data?.lenght) {
        return data[0];
    }

    return {}
}