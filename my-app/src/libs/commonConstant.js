import { Image } from 'antd';
import { Space, Table, Tag } from 'antd';
export const columnsArticle = [
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title',
      width: '10%',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
      width: '10%',
    },
    {
      title: 'Điểm',
      dataIndex: 'score',
      key: 'score',
      width: '10%',
    },
    {
      title: 'Ảnh bìa',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      width: '10%',
      render: (data) => 
    <Image
      width={200}
      src={data}
    />, 
    },
    {
      title: 'Tạo vào ngày',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: '10%',
    },
    {
      title: 'Cập nhật vào ngày',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: '10%',
    },
    {
      title: 'Action',
      key: 'action',
      width: '10%',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  export const columnsArticleReport = [
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title',
      width: '10%',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
      width: '10%',
    },
    {
      title: 'Điểm',
      dataIndex: 'score',
      key: 'score',
      width: '10%',
    },
    {
      title: 'Ảnh bìa',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      width: '10%',
      render: (data) => 
    <Image
      width={200}
      src={data}
    />, 
    },
    {
      title: 'Tạo vào ngày',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: '10%',
    },
    {
      title: 'Cập nhật vào ngày',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: '10%',
    },
    {
        title: 'Loại báo cáo',
        dataIndex: 'type',
        key: 'type',
        width: '10%',
      },
      {
        title: 'Mô tả báo cáo',
        dataIndex: 'descriptionReport',
        key: 'descriptionReport',
        width: '10%',
      },
    {
      title: 'Action',
      key: 'action',
      width: '10%',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];


  export const columnsUser = [
    {
      title: 'Tên đăng nhập',
      dataIndex: 'username',
      key: 'username',
      width: '10%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '10%',
    },
    {
      title: 'Biệt danh',
      dataIndex: 'nickname',
      key: 'nickname',
      width: '10%',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
      width: '10%', 
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
      width: '10%',
    },
    {
      title: 'Cập nhật vào ngày',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: '10%',
    },
    {
      title: 'Action',
      key: 'action',
      width: '10%',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];