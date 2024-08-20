import React, { useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface TinyMCEEditorProps {
  initialValue?: string;
  onEditorChange?: (content: string, editor: any) => void;
  id?: string;
}

const TinyMCEEditor: React.FC<TinyMCEEditorProps> = ({ initialValue = '', onEditorChange, id }) => {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    const handleEditorInit = () => {
      if (editorRef.current) {
        // Dispatch a custom event when the editor is initialized
        window.dispatchEvent(new CustomEvent('tinyMCEInitialized', { detail: id }));
      }
    };

    return () => {
      // Clean up any listeners if necessary
    };
  }, [id]);

  return (
    <Editor
      id={id}
      apiKey="8hsrzap36k5uyz2egzo6svrj5l9xxtht575hau4kixq9tp83"
      onInit={(evt, editor) => {
        editorRef.current = editor;
      }}
      initialValue={initialValue}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
        ],
        toolbar: 'undo redo | blocks | ' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      }}
      onEditorChange={onEditorChange}
    />
  );
};

export default TinyMCEEditor;