const handlePromise = async (promise : any) => {
  let response = [];
  try{
      const promiseResponse = await promise;
      response = [null, promiseResponse]
  }catch(errorCode){
      response = [errorCode.response.status, null]
  }
  return response;
}

export default handlePromise;