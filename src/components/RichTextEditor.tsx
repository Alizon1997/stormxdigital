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
            apiKey="a3elxhcbcb6ztwea7un7xig3ks0egq3mzhu8mlonw73yyccn" // Replace with your actual TinyMCE API key
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