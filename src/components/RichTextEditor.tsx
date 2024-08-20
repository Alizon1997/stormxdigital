      import React from 'react';
      import { Editor } from '@tinymce/tinymce-react';
      
      interface TinyMCEEditorProps {
        initialValue?: string;
        onEditorChange?: (content: string, editor: any) => void;
        id?: string;
      }
      
      const TinyMCEEditor: React.FC<TinyMCEEditorProps> = ({ initialValue = '', onEditorChange }) => {
        return (
          <Editor
            apiKey="8hsrzap36k5uyz2egzo6svrj5l9xxtht575hau4kixq9tp83" // Replace with your actual TinyMCE API key
            initialValue={initialValue}
            init={{
              height: 500,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
            }}
            onEditorChange={onEditorChange}
          />
        );
      };
      
      export default TinyMCEEditor;