export const successResponseObject = (data:any) => {
    return {
        status:true,
        data:data.data
    }
}

export const failedResponseObject = (data:any) => {
    return {
        status:false,
        data:data.response.data.message || 'Houve uma falha ao listar os automóveis'
    }
}