localStorage.setItem('key-avatar', avatar)

const firebaseConfig = {
    apiKey: "AIzaSyDnSOQFvv4-rrUCdXpfu6hLUKUss_hJQTg",
    authDomain: "hieu2209-11609.firebaseapp.com",
    projectId: "hieu2209-11609",
    storageBucket: "hieu2209-11609.appspot.com",
    messagingSenderId: "769410408153",
    appId: "1:769410408153:web:eb35e7cca116deaa7728c8",
    measurementId: "G-KPZF4LDDPS"
};
firebase.initializeApp(firebaseConfig);


var fbBucketName = 'images';

// get elements
var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');

// listen for file selection
fileButton.addEventListener('change', async function (e) {

    // what happened
    console.log('file upload event', e);

    // get file
    var file = e.target.files[0];

    // create a storage ref
    var storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);

    // upload file
    var uploadTask = storageRef.put(file);



    // update progress bar
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = progress;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, function (error) {


            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    break;

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        }, function () {

            var downloadURL = uploadTask.snapshot.downloadURL;

            console.log('downloadURL=======',downloadURL)
            localStorage.setItem('uploadAvatarKey', downloadURL)

            let divLocation = document.getElementById("image");

            divLocation.src = downloadURL;
            divLocation.width = 200;
            divLocation.height = 200;

        })
});
