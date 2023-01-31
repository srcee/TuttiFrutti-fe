import React from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

interface UploadButtonProps {
  isLoading: boolean;
}

const UploadButton: React.FC<UploadButtonProps> = ({ isLoading }) => {
  return (
    <div>
      {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
};

export default UploadButton;
