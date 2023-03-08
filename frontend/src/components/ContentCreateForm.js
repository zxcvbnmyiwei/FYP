import React, { useState, useEffect} from 'react';
import { Button, Form, Input, Modal, Radio } from 'antd';
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { python } from '@codemirror/lang-python';

const ContentCreateForm = ({ open, onCreate, onCancel, contentToEdit }) => {
  const [form] = Form.useForm();
  const [code, setCode] = useState(contentToEdit.code);

  const defaultValues = { 
      text: contentToEdit.text,
      output: contentToEdit.output,
      ranges: JSON.stringify(contentToEdit.ranges)
    }

  useEffect(() => {
    form.setFieldsValue(defaultValues)
   }, [contentToEdit])

  useEffect(() => {
    if (contentToEdit.code != null) {
      setCode(contentToEdit.code);
      console.log(contentToEdit)
    }
  }, [contentToEdit.code]);

  // const getReadOnlyRanges = (targetState) => {
  //   console.log(contentToEdit.ranges)
  //   var allContentRanges = [];
  //   const contentRangesDetails = contentToEdit.ranges;
  //   Object.entries(contentRangesDetails).map(([key, value]) => {
  //     const range = value.split("-") // splits for example 0-1 to 0 and 1 to get the "from" and the "to"
  //     var contentRanges = {};
  //     contentRanges.from = targetState.doc.line(range[0]).from;
  //     contentRanges.to = targetState.doc.line(range[1]).to;
  //     allContentRanges.push(contentRanges);
  //   })
  //   console.log("allContentRanges: ", allContentRanges)
  //   return (allContentRanges);
  // }

  const onChange = React.useCallback((value, viewUpdate) => {
    setCode(value);
    console.log(value)
  }, []);


  return (
    <Modal
      open={open}
      title="Edit Content"
      okText="Submit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            values.ranges = JSON.parse(values.ranges)
            console.log(typeof(values.range))
            values.code = code
            if (contentToEdit.topicid) {
              values.topicid = contentToEdit.topicid
              onCreate(values,"create");
            }
            else {
              onCreate(values,"edit");
            }
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={defaultValues}
      >
        <Form.Item
          name="text"
          label="Text"
          rules={[
            {
              required: true,
              message: 'Please enter a non-empty input!',
            },
          ]}
        >
          <Input />
        </Form.Item>
      <Form.Item>
      <CodeMirror
        value={code}
        key={contentToEdit.code}
        theme={dracula}
        height="40vh"
        width="50vw"
        minWidth='600px'
        extensions={[python({ jsx: true })]}
        onChange={onChange}
      />
        </Form.Item>
        <Form.Item
          name="ranges"
          label="Ranges"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="output"
          label="Output"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        </Form>
    </Modal>
  );
};

export default ContentCreateForm