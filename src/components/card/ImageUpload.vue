<template>
  <div class="image-upload-wrapper">
    <h4>Image: (recomended 450x600px)</h4>
    <input type="file" @change="uploadFile" />
    <p v-if="state.message">{{ state.message }}</p>
    <img :src="state.imagePreview" class="preview-image">
    <div class="image_buttons">
      <div>
        <button @click="repositionImage('top')">
          <img src="@/assets/icons/top.svg" alt="top">
        </button>
        <button @click="repositionImage('center')">
          <img src="@/assets/icons/middle.svg" alt="center">
        </button>        
        <button @click="repositionImage('top')">
          <img src="@/assets/icons/bottom.svg" alt="center">
        </button>
      </div>
      <button @click="remove" class="remove_btn">Remove</button>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import axios from 'axios';
import useCurrentCard from '@/composables/useCurrentCard.js'

export default {
  // m1r6bgh2
  setup() {
    const { updateImage, repositionImage, removeImage } = useCurrentCard();
    const state = reactive({
      imagePreview: "",
      message: "",
      formData: null,
    });

    async function uploadFile(event) {
      // console.log(event);
      const reader = new FileReader();
      reader.onload = function() {
        state.imagePreview = reader.result;
      };
      reader.onerror = function() {
        state.message = "There was a problem uploading your image, please try again";
      };
      reader.readAsDataURL(event.target.files[0]);
      try {
        state.formData = new FormData();
        state.formData.append('upload_preset','m1r6bgh2');
        state.formData.append('file',event.target.files[0]);
        const imageReqData = {
          url: 'https://api.cloudinary.com/v1_1/mauriciosaraiva/upload',
          method:'POST',
          data:state.formData,
        };
        const res = await axios(imageReqData);
        updateImage(res.data.url);
        // console.log(res)
      } catch (error) {
        throw new Error(error);
      }
    }

    function remove() {
      state.imagePreview = "";
      removeImage();
    }
    
    return { uploadFile, state, repositionImage, remove }
  }  
}
</script>

<style scoped>
  /* .image-upload-wrapper {
    text-align: left;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: inset 1px 1px 2px 2px #252727;
    border-radius: 3px;
  } */
  .image_buttons img{
    width: 30px;
  }
  h4 {
    font-weight: 300;
    margin: 10px 0;
  }
  input[type='file'] {
    margin: 0 0 1px 0;
  }
  button {
    margin-right: 5px;;
  }
  .remove_btn {
    color: white;
  }
  .remove_btn:hover {
    color:rgb(123.44.44);
  }
  /* .preview-image {
    height: 300px;
    width: 225px;
  } */
</style>