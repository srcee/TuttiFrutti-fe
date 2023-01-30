import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const UploadButton = (props) => {
    return (
        <div>
          {props.isLoading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      );
}

export default UploadButton;
