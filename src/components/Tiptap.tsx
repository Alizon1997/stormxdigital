import React, { useEffect, useState } from 'react'
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from '@tiptap/extension-character-count'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Color from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'

import { 
  Bold, Italic, Underline as UnderlineIcon, Strikethrough, Code, 
  List, ListOrdered, Heading1, Heading2, Heading3, 
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Link as LinkIcon, Image as ImageIcon, 
  Highlighter, Type, PilcrowSquare
} from 'lucide-react'

const MenuBar = ({ editor }: { editor: Editor | null }) => {
    if (!editor) {
      return null
    }
  
    return (
      <div className="flex flex-wrap gap-2 p-2 bg-gray-100 border-b border-gray-300">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`p-2 rounded ${editor.isActive('bold') ? 'bg-gray-200' : ''}`}
      >
        <Bold size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`p-2 rounded ${editor.isActive('italic') ? 'bg-gray-200' : ''}`}
      >
        <Italic size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-2 rounded ${editor.isActive('underline') ? 'bg-gray-200' : ''}`}
      >
        <UnderlineIcon size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`p-2 rounded ${editor.isActive('strike') ? 'bg-gray-200' : ''}`}
      >
        <Strikethrough size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`p-2 rounded ${editor.isActive('code') ? 'bg-gray-200' : ''}`}
      >
        <Code size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded ${editor.isActive('bulletList') ? 'bg-gray-200' : ''}`}
      >
        <List size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded ${editor.isActive('orderedList') ? 'bg-gray-200' : ''}`}
      >
        <ListOrdered size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-2 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : ''}`}
      >
        <Heading1 size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''}`}
      >
        <Heading2 size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`p-2 rounded ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-200' : ''}`}
      >
        <Heading3 size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={`p-2 rounded ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-200' : ''}`}
      >
        <AlignLeft size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={`p-2 rounded ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-200' : ''}`}
      >
        <AlignCenter size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={`p-2 rounded ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200' : ''}`}
      >
        <AlignRight size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className={`p-2 rounded ${editor.isActive({ textAlign: 'justify' }) ? 'bg-gray-200' : ''}`}
      >
        <AlignJustify size={16} />
      </button>
      <button
        onClick={() => {
          const url = window.prompt('URL')
          if (url) {
            editor.chain().focus().setLink({ href: url }).run()
          }
        }}
        className={`p-2 rounded ${editor.isActive('link') ? 'bg-gray-200' : ''}`}
      >
        <LinkIcon size={16} />
      </button>
      <button
        onClick={() => {
          const url = window.prompt('URL')
          if (url) {
            editor.chain().focus().setImage({ src: url }).run()
          }
        }}
        className="p-2 rounded"
      >
        <ImageIcon size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`p-2 rounded ${editor.isActive('highlight') ? 'bg-gray-200' : ''}`}
      >
        <Highlighter size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="p-2 rounded"
      >
        <Type size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="p-2 rounded"
      >
        <PilcrowSquare size={16} />
      </button>
    </div>
  )
}
const Tiptap = () => {
    const [isMounted, setIsMounted] = useState(false)
  
    useEffect(() => {
      setIsMounted(true)
    }, [])
  
    const editor = useEditor({
      extensions: [
        StarterKit,
        CharacterCount,
        Color,
        Highlight,
        Image,
        Link,
        Placeholder,
        TaskItem,
        TaskList,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
        TextStyle,
        Underline,
      ],
      content: '<p>Hello World!</p>',
      editorProps: {
        attributes: {
          class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
        },
      },
      onCreate: ({ editor }) => {
        // You can perform any initialization here
      },
      onUpdate: ({ editor }) => {
        // Handle content updates
      },
    })
  
    if (!isMounted) {
      return null // or return a loading placeholder
    }
  
    return (
      <div className="border border-gray-300 rounded-lg">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} className="p-4" />
      </div>
    )
  }
  
  export default Tiptap