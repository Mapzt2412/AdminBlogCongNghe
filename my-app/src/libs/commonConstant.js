import { Image } from 'antd';
import { Space, Table, Tag, Tooltip } from 'antd';

export const columnsArticle = (handleClick) => [
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title',
      fixed: 'left',
      ellipsis: {
        showTitle: false,
      },
      render: data => (
        <Tooltip placement="topLeft" title={data}>
          {data}
        </Tooltip>
      ),
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
      ellipsis: {
        showTitle: false,
      },
      render: data => (
        <Tooltip placement="topLeft" title={data}>
          {data}
        </Tooltip>
      ),
    },
    {
      title: 'Điểm',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: 'Ảnh bìa',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      ellipsis: {
        showTitle: false,
      },
      render: data => (
        <Tooltip placement="topLeft" title={data}>
          {data}
        </Tooltip>
      ),
    },
    {
      title: 'Tạo vào ngày',
      dataIndex: 'createdAt',
      key: 'createdAt',
      ellipsis: {
        showTitle: false,
      },
      render: data => (
        <Tooltip placement="topLeft" title={data}>
          {data}
        </Tooltip>
      ),
    },
    {
      title: 'Cập nhật vào ngày',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      ellipsis: {
        showTitle: false,
      },
      render: data => (
        <Tooltip placement="topLeft" title={data}>
          {data}
        </Tooltip>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      width: '10%',
      render: (_, record) => (
        <Space size="middle">
          <div className='table-action' onClick={() => handleClick("hideArticle", record.id)}>Ẩn bài viết</div>
        </Space>
      ),
    },
  ];
  export const columnsArticleReport = (handleClick) => [
    {
      title: 'Tiêu đề',
      dataIndex: 'articleInfo',
      key: 'articleInfo',
      width: '10%',
      render: data => (
        <div>{data.title}</div>
      ),
    },
    {
      title: 'Mô tả',
      dataIndex: 'articleInfo',
      key: 'articleInfo',
      ellipsis: {
        showTitle: false,
      },
      render: data => (
        <Tooltip placement="topLeft" title={data}>
          {data.description}
        </Tooltip>
      ),
    },
    {
      title: 'Điểm',
      dataIndex: 'articleInfo',
      key: 'articleInfo',
      width: '10%',
      render: data => (
        <Tooltip placement="topLeft" title={data}>
          {data.score}
        </Tooltip>
      ),
    },
    {
      title: 'Ảnh bìa',
      dataIndex: 'articleInfo',
      key: 'articleInfo',
      width: '10%',
      ellipsis: {
        showTitle: false,
      },
      render: data => (
        <Tooltip placement="topLeft" title={data}>
          {data.thumbnail}
        </Tooltip>
      ),
    },
    {
      title: 'Tạo vào ngày',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: '10%',
      ellipsis: {
        showTitle: false,
      },
      render: data => (
        <Tooltip placement="topLeft" title={data}>
          {data}
        </Tooltip>
      ),
    },
    {
      title: 'Cập nhật vào ngày',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: '10%',
      ellipsis: {
        showTitle: false,
      },
      render: data => (
        <Tooltip placement="topLeft" title={data}>
          {data}
        </Tooltip>
      ),
    },
    {
        title: 'Loại báo cáo',
        dataIndex: 'type',
        key: 'type',
        width: '10%',
      },
      {
        title: 'Mô tả báo cáo',
        dataIndex: 'description',
        key: 'description',
        width: '10%',
        ellipsis: {
          showTitle: false,
        },
        render: data => (
          <Tooltip placement="topLeft" title={data}>
            {data}
          </Tooltip>
        ),
      },
    {
      title: 'Action',
      key: 'action',
      width: '10%',
      render: (_, record) => (
        <Space size="middle">
          <div className ="table-action" onClick={() => handleClick("handleReport", record.id)}>Xử lý</div>
        </Space>
      ),
    },
  ];

  export const columnsTopics= (handleClick) => [
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
      width: '10%',
    },
    {
      title: 'Người tạo',
      dataIndex: 'adminId',
      key: 'adminId',
      width: '10%',
    },
    {
      title: 'Tạo vào ngày',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: '10%',
      ellipsis: {
        showTitle: false,
      },
      render: data => (
        <Tooltip placement="topLeft" title={data}>
          {data}
        </Tooltip>
      ),
    },
    {
      title: 'Cập nhật vào ngày',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: '10%',
      ellipsis: {
        showTitle: false,
      },
      render: data => (
        <Tooltip placement="topLeft" title={data}>
          {data}
        </Tooltip>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      width: '10%',
      render: (_, record) => (
        <Space size="middle" >
          <div className ="table-action" onClick={() => handleClick("deleteTopic", record.id)}>Delete</div>
        </Space>
      ),
    },
  ];

  export const columnsUser = (handleClick) => [
    {
      title: 'Tên đăng nhập',
      dataIndex: 'username',
      key: 'username',
      width: '15%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ellipsis: {
        showTitle: false,
      },
      render: data => (
        <Tooltip placement="topLeft" title={data}>
          {data}
        </Tooltip>
      ),
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
      ellipsis: {
        showTitle: false,
      },
      render: data => (
        <Tooltip placement="topLeft" title={data}>
          {data}
        </Tooltip>
      ),
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
      ellipsis: {
        showTitle: false,
      },
      render: data => (
        <Tooltip placement="topLeft" title={data}>
          {data}
        </Tooltip>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      width: '10%',
      render: (_, record) => (
        <Space size="middle">
          <div className='table-action' onClick={() => handleClick("banUser", record.id)}>Cấm người dùng</div>
        </Space>
      ),
    },
  ];