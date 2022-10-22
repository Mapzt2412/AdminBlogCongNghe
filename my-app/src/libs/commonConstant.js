import { Image } from 'antd';
import { Space, Table, Tag, Tooltip } from 'antd';

export const columnsArticle = [
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
      width: '10%',
    },
    {
      title: 'Ảnh bìa',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
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
        dataIndex: 'descriptionReport',
        key: 'descriptionReport',
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
          <a>Invite {record.name}</a>
          <a>Delete</a>
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

  export const columnsUser = [
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
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];