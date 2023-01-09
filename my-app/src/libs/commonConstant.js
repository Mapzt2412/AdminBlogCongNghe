import { Space, Tooltip } from "antd";
import vi from "moment/locale/vi";
import moment from "moment";
export const formatDate = (date) => {
  return moment.utc(date).locale("vi", vi).format('Do-M-YYYY')
};
export const columnsArticle = (handleClick) => [
  {
    title: "Tiêu đề",
    dataIndex: "title",
    key: "title",
    fixed: "left",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={data}>
        {data}
      </Tooltip>
    ),
  },
  {
    title: "Mô tả",
    dataIndex: "description",
    key: "description",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={data}>
        {data}
      </Tooltip>
    ),
  },
  {
    title: "Điểm",
    dataIndex: "score",
    key: "score",
  },
  {
    title: "Ảnh bìa",
    dataIndex: "thumbnail",
    key: "thumbnail",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={data}>
        {data}
      </Tooltip>
    ),
  },
  {
    title: "Tạo vào ngày",
    dataIndex: "createdAt",
    key: "createdAt",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={formatDate(data)}>
        {formatDate(data)}
      </Tooltip>
    ),
  },
  {
    title: "Cập nhật vào ngày",
    dataIndex: "updatedAt",
    key: "updatedAt",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={formatDate(data)}>
        {formatDate(data)}
      </Tooltip>
    ),
  },
  {
    title: "Action",
    key: "action",
    width: "10%",
    render: (_, record) => (
      <Space size="middle">
        <div
          className="table-action"
          onClick={() => handleClick("hideArticle", record.id)}
        >
          Xoá bài viết
        </div>
      </Space>
    ),
  },
];
export const columnsArticleReport = (handleClick) => [
  {
    title: "Tiêu đề",
    dataIndex: "article",
    key: "article",
    width: "10%",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => <div>{data.title}</div>,
  },
  {
    title: "Mô tả",
    dataIndex: "article",
    key: "article",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={data.description}>
        {data.description}
      </Tooltip>
    ),
  },
  {
    title: "Điểm",
    dataIndex: "article",
    key: "article",
    width: "10%",
    render: (data) => (
      <Tooltip placement="topLeft" title={data.score}>
        {data.score}
      </Tooltip>
    ),
  },
  {
    title: "Ảnh bìa",
    dataIndex: "article",
    key: "article",
    width: "10%",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={data.thumbnail}>
        {data.thumbnail}
      </Tooltip>
    ),
  },
  {
    title: "Tạo vào ngày",
    dataIndex: "article",
    key: "article",
    width: "10%",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={data.createdAt}>
        {data.createdAt}
      </Tooltip>
    ),
  },
  {
    title: "Cập nhật vào ngày",
    dataIndex: "article",
    key: "article",
    width: "10%",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={formatDate(data.updatedAt)}>
        {formatDate(data.updatedAt)}
      </Tooltip>
    ),
  },
  {
    title: "Loại báo cáo",
    dataIndex: "type",
    key: "type",
    width: "10%",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={renderReport(data)}>
        {renderReport(data)}
      </Tooltip>
    ),
  },
  {
    title: "Mô tả báo cáo",
    dataIndex: "description",
    key: "description",
    width: "10%",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={data}>
        {data}
      </Tooltip>
    ),
  },
];

export const columnsTopics = (handleClick) => [
  {
    title: "Tên",
    dataIndex: "name",
    key: "name",
    width: "10%",
  },
  {
    title: "Người tạo",
    dataIndex: "adminId",
    key: "adminId",
    width: "10%",
  },
  {
    title: "Tạo vào ngày",
    dataIndex: "createdAt",
    key: "createdAt",
    width: "10%",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={formatDate(data)}>
        {formatDate(data)}
      </Tooltip>
    ),
  },
  {
    title: "Cập nhật vào ngày",
    dataIndex: "updatedAt",
    key: "updatedAt",
    width: "10%",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={formatDate(data)}>
        {formatDate(data)}
      </Tooltip>
    ),
  },
  {
    title: "Action",
    key: "action",
    width: "10%",
    render: (_, record) => (
      <Space size="middle">
        <div
          className="table-action"
          onClick={() => handleClick("deleteTopic", record.id)}
        >
          Delete
        </div>
      </Space>
    ),
  },
];

export const columnsUser = (handleClick) => [
  {
    title: "Tên đăng nhập",
    dataIndex: "username",
    key: "username",
    width: "10%",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "20%",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={data}>
        {data}
      </Tooltip>
    ),
  },
  {
    title: "Biệt danh",
    dataIndex: "nickname",
    key: "nickname",
    width: "10%",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={data}>
        {data}
      </Tooltip>
    ),
  },
  {
    title: "Mô tả",
    dataIndex: "description",
    key: "description",
    width: "10%",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={data}>
        {data}
      </Tooltip>
    ),
  },
  {
    title: "Số điện thoại",
    dataIndex: "phone",
    key: "phone",
    width: "10%",
  },
  {
    title: "Cập nhật vào ngày",
    dataIndex: "updatedAt",
    key: "updatedAt",
    width: "10%",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={formatDate(data)}>
        {formatDate(data)}
      </Tooltip>
    ),
  },
  {
    title: "Action",
    key: "action",
    width: "10%",
    render: (_, record) => (
      <Space size="middle">
        {record.status === "ban" ? (
          <div
            className="table-action"
            onClick={() => handleClick("unBanUser", record.id)}
          >
            Bỏ cấm người dùng
          </div>
        ) : (
          <div
            className="table-action"
            onClick={() => handleClick("banUser", record.id)}
          >
            Cấm người dùng
          </div>
        )}
      </Space>
    ),
  },
];


export const columnsUserReport = (handleClick) => [
  {
    title: "Tên",
    dataIndex: "beingReport",
    key: "beingReport",
    width: "10%",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={data.nickname}>
        {data.nickname}
      </Tooltip>
    ),
  },
  {
    title: "Email",
    dataIndex: "beingReport",
    key: "beingReport",
    width: "20%",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={data.email}>
        {data.email}
      </Tooltip>
    ),
  },
  {
    title: "Mô tả báo cáo",
    dataIndex: "description",
    key: "description",
    width: "10%",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={data}>
        {data}
      </Tooltip>
    ),
  },
  {
    title: "Loại báo cáo",
    dataIndex: "type",
    key: "type",
    width: "10%",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={renderReport(data)}>
        {renderReport(data)}
      </Tooltip>
    ),
  },
  {
    title: "Cập nhật vào ngày",
    dataIndex: "updatedAt",
    key: "updatedAt",
    width: "10%",
    ellipsis: {
      showTitle: false,
    },
    render: (data) => (
      <Tooltip placement="topLeft" title={formatDate(data)}>
        {formatDate(data)}
      </Tooltip>
    ),
  },
  {
    title: "Action",
    key: "action",
    width: "10%",
    render: (_, record) => (
      <Space size="middle">
        {record.status === "ban" ? (
          <div
            className="table-action"
            onClick={() => handleClick("unBanUser", record.beingReport.id)}
          >
            Bỏ cấm người dùng
          </div>
        ) : (
          <div
            className="table-action"
            onClick={() => handleClick("banUser", record.beingReport.id)}
          >
            Cấm người dùng
          </div>
        )}
      </Space>
    ),
  },
];


export const renderReport = (type) => {
   return [
    {
        value: "Nội dung kích dục",
        type: "aphrodisiac",
    },
    {
        value: "Bán hàng trái phép",
        type: "illegal sales"
    },
    {
        value: "Spam",
        type: "spam"
    },

    {
        value: "Bạo lực",
        type: "Violent"
    },
    {
        value: "Quấy rối",
        type: "Trouble"
    },
    {
        value: "Tự tử hoặc tự gây thương tích",
        type: "Suicide"
    },
    {
        value: "Thông tin sai sự thật",
        type: "False"
    },
    {
        value: "Ngôn từ gây thù ghét",
        type: "Hate"
    },
    {
        value: "Khủng bố",
        type: "Terrorism"
    },
    {
        value: "Vấn đề khác",
        type: "Other"
    },
  ].find((value) => value.type === type).value
}