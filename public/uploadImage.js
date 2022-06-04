import axios from 'axios';

const apiUrl = 'http://13.125.193.186:8080/recommendation/v2';
let imageFile = null;

const getImageFile = (e) => {
    console.log(e);
    const files = e.currentTarget.files;

    [...files].forEach(file => {
        if(!file.type.match("image/*")) {
            alert('이미지 파일만 업로드 가능합니다.');
            return;
        }
        console.log(typeof file, file);
    });

    if ([...files].length > 2) {
        alert('이미지 파일은 1개만 업로드 가능합니다.');
        
    } else {
        imageFile = files;
        return;
    }
}

const createPreview = (e, file) => {
    const preview = document.createElement('img');
    preview.setAttribute('src', e.target.result);
    preview.setAttribute('data-file', file.name);
    console.log(e.target.result, file.name);

    return preview;
}

const callApi = async () => {
    fetch(apiUrl, {
        headers: {
            contentType: 'multipart/form-data'
        }
    }

    )
}

document.getElementById('image-uploader').addEventListener('change', getImageFile);


document.getElementById('upload-button').onclick = async (e) => {
    e.preventDefault();
    console.log('button' ,e);
    imageFile = imageFile[0];
    console.log(imageFile);
    
    const response = await axios.post(apiUrl, {'uploaded_file' : imageFile});
    console.log(response);
};