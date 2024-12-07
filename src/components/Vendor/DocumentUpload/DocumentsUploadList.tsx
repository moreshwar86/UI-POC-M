import React, { useEffect, useState } from "react";
import { List, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { RcFile } from "antd/lib/upload";
import { useDispatch, useSelector } from "react-redux";
import { setVendorFormDetails } from "../../../store/vendor";

interface DocumentsUploadListProps {
  documents: Array<{
    title: string;
    required: boolean;
    fileList?: any[];
    onChange?: (fileList: any[]) => void;
  }>;
}

const DocumentsUploadList: React.FC<DocumentsUploadListProps> = ({
  documents,
}) => {
  const dispatch = useDispatch();
  const vendorFormState = useSelector((state: any) => state?.vendorForm);
  console.log("vendorFormState-------", vendorFormState);

  const [filesList, setFilesList] = useState<any>([]);
  console.log("filesList", filesList);

  const beforeUpload = (item: any, file: RcFile) => {
    const isValidFormat =
      file.type === "application/pdf" ||
      file.type === "image/jpeg" ||
      file.type === "image/png";
    const isLessThan10MB = file.size / 1024 / 1024 < 10;

    if (!isValidFormat) {
      message.error("You can only upload PDF, JPG, or PNG files!");
      return false;
    }

    if (!isLessThan10MB) {
      message.error("File must be smaller than 10MB!");
      return false;
    }
    let existingFile = filesList.find((f: any) => f?.title === item?.title);
    if (existingFile) {
      existingFile.file = file;
      existingFile.title = item?.title;
    } else {
      existingFile = {
        title: item?.title,
        file: file,
      };
    }

    setFilesList([...filesList, existingFile]);
    return true;
  };
  useEffect(() => {
    dispatch(setVendorFormDetails({ documentList: filesList }));
  }, [filesList]);

  return (
    <List
      dataSource={documents}
      renderItem={(item) => (
        <List.Item>
          <div style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                {item.title}
                {item.required && <span style={{ color: "red" }}> *</span>}{" "}
                {
                  vendorFormState?.vendorFormDetails?.documentList?.filter(
                    (f: any) => f?.title === item.title
                  )?.[0]?.file?.name
                }
              </span>
              <Upload
                beforeUpload={(file) => beforeUpload(item, file)}
                fileList={item.fileList}
                onChange={({ fileList }) => item.onChange?.(fileList)}
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </div>
          </div>
        </List.Item>
      )}
    />
  );
};
export default DocumentsUploadList;
