import {getApi, postApi, putApi, deleteApi} from '../genericServices'

export async function getPosts(){
    return await getApi(`/posts`)
}

export async function detailPost(id){
    return await getApi(`/posts/${id}`)
}

export async function postPost(obj){
    return await postApi(`/posts`, obj)
}

export async function putPost(obj){
    return await putApi(`/posts`, obj)
}

export async function deletePost(id){
    return await deleteApi(`/posts/${id}`)
}