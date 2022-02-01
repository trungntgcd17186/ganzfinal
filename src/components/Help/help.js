import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import "./help.css";

function Help(props) {
  return (
    <div>
      <div class="mainHelp">
        <div class="navbar">
          <div class="logo-back grid">
            <Link to="/" class="header__logo">
              <i class="fas fa-cannabis"></i>
              <span class="header-search__logo-name">GanZ</span>
            </Link>
          </div>
          <h1 class="title1">Xin chào. GanZ có thể giúp gì cho bạn?</h1>
          <div class="dropdown2">
            <input
              type="text"
              id="myInput"
              onclick="myFunction()"
              onkeyup="filterFunction()"
              placeholder="Search for names.."
            />
            <div
              id="myDropdown"
              onclick="myFunction()"
              class="dropdown2-content"
            >
              <div class="tab-item active">
                <a href="#h3-move">
                  Bao lâu từ lúc đặt hàng thì tôi có thể nhận được hàng?
                </a>
                <a href="#h3-move">
                  Làm thế nào để tôi có thể theo dõi đơn hàng?
                </a>
                <a href="#h3-move">Khung giờ giao hàng của GanZ?</a>
              </div>

              <div class="tab-item">
                <a href="#h3-move2">GanZ có cửa hàng không?</a>
                <a href="#h3-move2">
                  Chính sách giá được áp dụng như thế nào khi tôi mua trực tiếp
                  ?
                </a>
                <a href="#h3-move2">
                  Các hình thức thanh toán khi tôi mua hàng trực tiếp là gì?
                </a>
              </div>

              <div class="tab-item">
                <a href="#h3-move3">Thế nào là đơn hàng 2 chiều?</a>
                <a href="#h3-move3">
                  Tôi đổi hàng tại kho có tính ship không ?
                </a>
                <a href="#h3-move3">
                  Tôi trả hàng, GanZ hoàn tiền cho tôi như thế nào?
                </a>
              </div>

              <div class="tab-item">
                <a href="#h3-move4">
                  Tôi muốn thay đổi thông tin với đơn hàng đã đặt (SĐT nhận
                  hàng, địa chỉ, hình thức thanh toán,...)
                </a>
                <a href="#h3-move4">
                  Tôi muốn huỷ đơn hàng đã thanh toán trước?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid">
        <div class="main-container">
          <div class="tabs">
            <h1 class="list">Danh mục</h1>
            <div class="tab-item p-active">
              <p>Về việc giao hàng của GanZ</p>
              <div class="line"></div>
            </div>

            <div class="tab-item">
              <p>Trải nghiệm mua hàng trực tiếp</p>
            </div>

            <div class="tab-item">
              <p>Đổi/trả hàng với GanZ</p>
            </div>

            <div class="tab-item">
              <p>Các vấn đề liên quan đến đơn hàng</p>
            </div>
          </div>

          <div class="list-question-container">
            <div id="slider">
              <input type="radio" name="slider" id="slide1" checked />
              <input type="radio" name="slider" id="slide2" />
              <input type="radio" name="slider" id="slide3" />
              <input type="radio" name="slider" id="slide4" />

              <div id="slides">
                <div id="overflow">
                  <div class="inner">
                    <div id="slide slide_1">
                      <div class="slide-content">
                        <p class="p-slider">
                          Tình hình Dịch Covid đã ảnh hưởng một phần đến thời
                          gian giao/nhận hàng. Bạn hãy yên tâm, GanZ đang đốc
                          thúc các đơn vị vận chuyển xử lý đơn hàng trong thời
                          gian sớm nhất, tuy nhiên sẽ trễ hơn so với dự kiến. Để
                          theo dõi hành trình đơn hàng, bạn hãy vào mục Tôi Đơn
                          hàng Thông tin đơn nhé!
                        </p>
                      </div>
                    </div>

                    <div id="slide slide_2">
                      <div class="slide-content-2">
                        <p class="p-slider-2">
                          Trang này KHÔNG THỂ tìm kiếm thông tin chi tiết đơn
                          hàng, sản phẩm khuyến mãi hoặc số điện thoại. Để tra
                          những nội dung trên, bạn có thể vào trang chủ GanZ.vn
                          hoặc tải ứng dụng di động.
                        </p>
                      </div>
                    </div>

                    <div id="slide slide_3">
                      <div class="slide-content-3">
                        <p class="p-slider-3">
                          Nhằm đảm bảo an toàn sức khỏe cộng đồng, nếu bạn có
                          nhu cầu thay đổi hoặc hủy chuyến bay, vui lòng liên hệ
                          GanZ trước 48 tiếng so với giờ khởi hành để được hỗ
                          trợ.
                        </p>
                      </div>
                    </div>

                    <div id="slide slide_4">
                      <div class="slide-content-4">
                        <p class="p-slider-4">
                          Từ ngày 18/8/2021, Now chính thức được đổi tên thành
                          GanZ. Cập nhập ứng dụng GanZ từ ngày 18/8 để thấy
                          phiên bản mới và nhận được vô vàn ưu đãi hấp dẫn từ
                          GanZ.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bullets">
                  <label id="btn1" for="slide1"></label>
                  <label id="btn2" for="slide2"></label>
                  <label id="btn3" for="slide3"></label>
                  <label id="btn4" for="slide4"></label>
                </div>
              </div>
            </div>

            <div class="list-question">
              <div class="tab-content">
                <div class="tab-pane active">
                  <h1>Về việc giao hàng của GanZ</h1>
                  <h3 id="h3-move">
                    Bao lâu từ lúc đặt hàng thì tôi có thể nhận được hàng?
                  </h3>
                  <p>
                    Nếu ở nội thành Hà Nội và Hồ Chí Minh, khách hàng sẽ được
                    nhận hàng trong vòng 24h kể từ khi có cuộc gọi hoặc tin nhắn
                    xác nhận trừ trường hợp đơn chưa đủ tồn kho GanZ sẽ gửi đi
                    từ kho vận hành khác tỉnh thì thời gian sẽ là 2-3 ngày.
                  </p>

                  <p>
                    Nếu ở tỉnh khác, khách hàng sẽ nhận được hàng trong 2-3
                    ngày.
                  </p>

                  <p>
                    Các trường hợp đơn hàng đặt trước (Pre-order) sẽ được thông
                    báo về ngày giao hàng ở mỗi chương trình.
                  </p>

                  <h3 id="h3-move">
                    Làm thế nào để tôi có thể theo dõi đơn hàng?
                  </h3>
                  <p>
                    Khách hàng có thể inbox vào fanpage GanZ với thông tin mã
                    đơn hàng hoặc số điện thoại đặt hàng, chăm sóc khách hàng sẽ
                    gửi đến khách hàng mã vận đơn trong thời gian sớm nhất.
                  </p>

                  <h3 id="h3-move">Khung giờ giao hàng của GanZ?</h3>
                  <p>
                    GanZ giao giờ hành chính, một số khu vực có thể hỗ trợ giao
                    tối cho khách hàng. GanZ không cam kết có thể hỗ trợ các
                    trường hợp giao tối 100% tuy nhiên GanZ chắc chắn sẽ làm mọi
                    cách có thể hỗ trợ cho khách hàng.
                  </p>
                </div>

                <div class="tab-pane">
                  <h1>Trải nghiệm mua hàng trực tiếp</h1>

                  <h3 id="h3-move2">GanZ có cửa hàng không?</h3>

                  <p>
                    Hiện tại GanZ không có cửa hàng. GanZ có 2 Hub vận hành và
                    có hỗ trợ khách hàng mua trực tiếp tại Hub để có những trải
                    nghiệm thực tế nhất
                  </p>
                  <p>Địa chỉ:</p>
                  <p>
                    + GanZ Hà Nội: Lầu 3, khu B, 103 Vạn Phúc, Phường Vạn Phúc,
                    Quận Hà Đông, Hà Nội (đối diện thế giới di động)
                  </p>
                  <p>
                    + GanZ HCM: Lầu 1, Số 163 Trần Trọng Cung, Phường Tân Thuận
                    Đông, Quận 7, Tp. Hồ Chí Minh
                  </p>
                  <p>
                    Giờ làm việc: 8h30 - 17h30 các ngày trừ Chủ nhật và ngày lễ.
                  </p>

                  <h3 id="h3-move2">
                    Chính sách giá được áp dụng như thế nào khi tôi mua trực
                    tiếp ?
                  </h3>
                  <p>
                    Mọi đơn hàng của khách hàng đều được tính giá như giá trên
                    website. Khách hàng yên tâm, các mã giảm giá chương trình
                    quà tặng,... vẫn được hỗ trợ như khi đặt online.
                  </p>
                  <h3 id="h3-move2">
                    Các hình thức thanh toán khi tôi mua hàng trực tiếp là gì?
                  </h3>

                  <p>
                    Cũng giống như mua hàng online khách hàng mua hàng tại kho
                    có 2 hình thức để thanh toán đơn hàng: tiền mặt hoặc chuyển
                    khoản ngân hàng. GanZ chưa áp dụng hình thức quẹt thẻ.
                  </p>
                </div>

                <div class="tab-pane">
                  <h1>Đổi/trả hàng với GanZ</h1>

                  <h3 id="h3-move3">Thế nào là đơn hàng 2 chiều?</h3>

                  <p>
                    Đơn hàng 2 chiều điển hình ở đơn đổi hàng ở GanZ, khách hàng
                    sẽ nhận hàng mới và đồng thời gửi hàng đổi cho bưu tá giao
                    hàng.
                  </p>

                  <h3 id="h3-move3">
                    Tôi đổi hàng tại kho có tính ship không ?
                  </h3>

                  <p>
                    Không. GanZ luôn hỗ trợ khách hàng với trải nghiệm tốt nhất,
                    khách hàng có thể báo với GanZ về tình trạng đổi của đơn
                    hàng GanZ sẽ đóng sẵn hàng khách hàng chỉ cần ghé kho và đổi
                    hàng ngay.
                  </p>

                  <h3 id="h3-move3">
                    Tôi trả hàng, GanZ hoàn tiền cho tôi như thế nào?
                  </h3>
                  <p>
                    Tại GanZ, ngay khi có yêu cầu trả hàng hoàn tiền, chúng tôi
                    sẽ hoàn tiền cho khách hàng trong vòng 24h, hàng sẽ được
                    nhận lại sau đó. Cụ thể:
                  </p>

                  <p>
                    Bước 1: Khách hàng thông báo với GanZ về đơn hàng cần trả
                    tại đây. Sau khi nhận thông tin GanZ sẽ liên hệ xác nhận và
                    thực hiện thủ tục hoàn tiền qua STK hoặc MOMO – tiền sẽ được
                    hoàn trong tối đa 24h (không tính thứ 7 và chủ nhật).
                  </p>

                  <p>Bước 2: GanZ nhận lại hàng trả bằng 2 cách</p>

                  <p>
                    Cách 1: GanZ đến tận nơi lấy hàng, không thu bất kỳ chi phí
                    gì.
                  </p>

                  <p>Cách 2: Khách hàng gửi trả hàng theo thông tin sau:</p>

                  <p>
                    + Hà Nội: Lầu 3, khu B 103 Vạn Phúc, phường Vạn Phúc, Quận
                    Hà Đông, Hà Nội, người nhận là: Mr: Minh: 0359472197
                  </p>

                  <p>
                    + Hồ Chí Minh: F9, Đường số 3A, KDC Him Lam, Phường Tân
                    Hưng, Quận 7, Hồ Chí Minh , người nhận Mr: Tấn 0981153277
                  </p>

                  <p> Thời gian nhận hàng từ 8h30 - 17h30 (Thứ 2 - Thứ 7)</p>

                  <p>
                    Sau khi gửi khách hàng hỗ trợ chụp lại hóa đơn của hãng vận
                    chuyển và gửi qua inbox để GanZ có thể tiện theo dõi đơn
                    hàng.
                  </p>
                </div>

                <div class="tab-pane">
                  <h1>Các vấn đề liên quan đến đơn hàng</h1>

                  <h3 id="h3-move4">
                    Tôi muốn thay đổi thông tin với đơn hàng đã đặt (SĐT nhận
                    hàng, địa chỉ, hình thức thanh toán,...)
                  </h3>

                  <p>
                    Khách hàng inbox vào fanpage GanZ hoặc gọi hotline 1900
                    272737 để chăm sóc khách hàng hỗ trợ thay đổi thông tin đơn
                    hàng của khách hàng.
                  </p>

                  <p>
                    Riêng về việc thay đổi hình thức thanh toán từ COD sang
                    thanh toán trước, GanZ sẽ gởi đến khách thông tin STK:
                  </p>

                  <p>Cong ty Co Phan Fastech Asia </p>
                  <p>0691000416134</p>
                  <p>Vietcombank CN Tây Hà Nội</p>
                  <p>Hoặc Momo: 0988360861- Phạm Chí Nhu</p>
                  <p>
                    Ngay khi nhận được thanh toán, GanZ sẽ cập nhật lại thông
                    tin thanh toán cho khách hàng.
                  </p>

                  <h3 id="h3-move4">
                    Tôi muốn huỷ đơn hàng đã thanh toán trước?
                  </h3>

                  <p>
                    Hiện tại GanZ chưa thể hoàn tiền tự động cho khách hàng.
                    Khách hàng điền thông tin ở đây hoặc inbox Fanpage hoặc gọi
                    hotline 1900272737, GanZ sẽ hoàn lại tiền trong vòng 24h sau
                    khi nhận được thông tin.
                  </p>
                </div>

                <div class="tab-pane">
                  <h1>Về việc giao hàng của GanZ</h1>
                  <h3 id="h3-move">
                    Bao lâu từ lúc đặt hàng thì tôi có thể nhận được hàng?
                  </h3>
                  <p>
                    Nếu ở nội thành Hà Nội và Hồ Chí Minh, khách hàng sẽ được
                    nhận hàng trong vòng 24h kể từ khi có cuộc gọi hoặc tin nhắn
                    xác nhận trừ trường hợp đơn chưa đủ tồn kho GanZ sẽ gửi đi
                    từ kho vận hành khác tỉnh thì thời gian sẽ là 2-3 ngày.
                  </p>

                  <p>
                    Nếu ở tỉnh khác, khách hàng sẽ nhận được hàng trong 2-3
                    ngày.
                  </p>

                  <p>
                    Các trường hợp đơn hàng đặt trước (Pre-order) sẽ được thông
                    báo về ngày giao hàng ở mỗi chương trình.
                  </p>

                  <h3 id="h3-move">
                    Làm thế nào để tôi có thể theo dõi đơn hàng?
                  </h3>
                  <p>
                    Khách hàng có thể inbox vào fanpage GanZ với thông tin mã
                    đơn hàng hoặc số điện thoại đặt hàng, chăm sóc khách hàng sẽ
                    gửi đến khách hàng mã vận đơn trong thời gian sớm nhất.
                  </p>

                  <h3 id="h3-move">Khung giờ giao hàng của GanZ?</h3>
                  <p>
                    GanZ giao giờ hành chính, một số khu vực có thể hỗ trợ giao
                    tối cho khách hàng. GanZ không cam kết có thể hỗ trợ các
                    trường hợp giao tối 100% tuy nhiên GanZ chắc chắn sẽ làm mọi
                    cách có thể hỗ trợ cho khách hàng.
                  </p>
                </div>

                <div class="tab-pane">
                  <h1>Trải nghiệm mua hàng trực tiếp</h1>

                  <h3 id="h3-move">GanZ có cửa hàng không?</h3>

                  <p>
                    Hiện tại GanZ không có cửa hàng. GanZ có 2 Hub vận hành và
                    có hỗ trợ khách hàng mua trực tiếp tại Hub để có những trải
                    nghiệm thực tế nhất
                  </p>
                  <p>Địa chỉ:</p>
                  <p>
                    + GanZ Hà Nội: Lầu 3, khu B, 103 Vạn Phúc, Phường Vạn Phúc,
                    Quận Hà Đông, Hà Nội (đối diện thế giới di động)
                  </p>
                  <p>
                    + GanZ HCM: Lầu 1, Số 163 Trần Trọng Cung, Phường Tân Thuận
                    Đông, Quận 7, Tp. Hồ Chí Minh
                  </p>
                  <p>
                    Giờ làm việc: 8h30 - 17h30 các ngày trừ Chủ nhật và ngày lễ.
                  </p>

                  <h3 id="h3-move">
                    Chính sách giá được áp dụng như thế nào khi tôi mua trực
                    tiếp ?
                  </h3>
                  <p>
                    Mọi đơn hàng của khách hàng đều được tính giá như giá trên
                    website. Khách hàng yên tâm, các mã giảm giá chương trình
                    quà tặng,... vẫn được hỗ trợ như khi đặt online.
                  </p>
                  <h3 id="h3-move">
                    Các hình thức thanh toán khi tôi mua hàng trực tiếp là gì?
                  </h3>

                  <p>
                    Cũng giống như mua hàng online khách hàng mua hàng tại kho
                    có 2 hình thức để thanh toán đơn hàng: tiền mặt hoặc chuyển
                    khoản ngân hàng. GanZ chưa áp dụng hình thức quẹt thẻ.
                  </p>
                </div>

                <div class="tab-pane">
                  <h1>Đổi/trả hàng với GanZ</h1>

                  <h3 id="h3-move">Thế nào là đơn hàng 2 chiều?</h3>

                  <p>
                    Đơn hàng 2 chiều điển hình ở đơn đổi hàng ở GanZ, khách hàng
                    sẽ nhận hàng mới và đồng thời gửi hàng đổi cho bưu tá giao
                    hàng.
                  </p>

                  <h3 id="h3-move">
                    Tôi đổi hàng tại kho có tính ship không ?
                  </h3>

                  <p>
                    Không. GanZ luôn hỗ trợ khách hàng với trải nghiệm tốt nhất,
                    khách hàng có thể báo với GanZ về tình trạng đổi của đơn
                    hàng GanZ sẽ đóng sẵn hàng khách hàng chỉ cần ghé kho và đổi
                    hàng ngay.
                  </p>

                  <h3 id="h3-move">
                    Tôi trả hàng, GanZ hoàn tiền cho tôi như thế nào?
                  </h3>
                  <p>
                    Tại GanZ, ngay khi có yêu cầu trả hàng hoàn tiền, chúng tôi
                    sẽ hoàn tiền cho khách hàng trong vòng 24h, hàng sẽ được
                    nhận lại sau đó. Cụ thể:
                  </p>

                  <p>
                    Bước 1: Khách hàng thông báo với GanZ về đơn hàng cần trả
                    tại đây. Sau khi nhận thông tin GanZ sẽ liên hệ xác nhận và
                    thực hiện thủ tục hoàn tiền qua STK hoặc MOMO – tiền sẽ được
                    hoàn trong tối đa 24h (không tính thứ 7 và chủ nhật).
                  </p>

                  <p>Bước 2: GanZ nhận lại hàng trả bằng 2 cách</p>

                  <p>
                    Cách 1: GanZ đến tận nơi lấy hàng, không thu bất kỳ chi phí
                    gì.
                  </p>

                  <p>Cách 2: Khách hàng gửi trả hàng theo thông tin sau:</p>

                  <p>
                    + Hà Nội: Lầu 3, khu B 103 Vạn Phúc, phường Vạn Phúc, Quận
                    Hà Đông, Hà Nội, người nhận là: Mr: Minh: 0359472197
                  </p>

                  <p>
                    + Hồ Chí Minh: F9, Đường số 3A, KDC Him Lam, Phường Tân
                    Hưng, Quận 7, Hồ Chí Minh , người nhận Mr: Tấn 0981153277
                  </p>

                  <p> Thời gian nhận hàng từ 8h30 - 17h30 (Thứ 2 - Thứ 7)</p>

                  <p>
                    Sau khi gửi khách hàng hỗ trợ chụp lại hóa đơn của hãng vận
                    chuyển và gửi qua inbox để GanZ có thể tiện theo dõi đơn
                    hàng.
                  </p>
                </div>

                <div class="tab-pane">
                  <h1>Các vấn đề liên quan đến đơn hàng</h1>

                  <h3 id="h3-move">
                    Tôi muốn thay đổi thông tin với đơn hàng đã đặt (SĐT nhận
                    hàng, địa chỉ, hình thức thanh toán,...)
                  </h3>

                  <p>
                    Khách hàng inbox vào fanpage GanZ hoặc gọi hotline 1900
                    272737 để chăm sóc khách hàng hỗ trợ thay đổi thông tin đơn
                    hàng của khách hàng.
                  </p>

                  <p>
                    Riêng về việc thay đổi hình thức thanh toán từ COD sang
                    thanh toán trước, GanZ sẽ gởi đến khách thông tin STK:
                  </p>

                  <p>Cong ty Co Phan Fastech Asia </p>
                  <p>0691000416134</p>
                  <p>Vietcombank CN Tây Hà Nội</p>
                  <p>Hoặc Momo: 0988360861- Phạm Chí Nhu</p>
                  <p>
                    Ngay khi nhận được thanh toán, GanZ sẽ cập nhật lại thông
                    tin thanh toán cho khách hàng.
                  </p>

                  <h3 id="h3-move">
                    Tôi muốn huỷ đơn hàng đã thanh toán trước?
                  </h3>

                  <p>
                    Hiện tại GanZ chưa thể hoàn tiền tự động cho khách hàng.
                    Khách hàng điền thông tin ở đây hoặc inbox Fanpage hoặc gọi
                    hotline 1900272737, GanZ sẽ hoàn lại tiền trong vòng 24h sau
                    khi nhận được thông tin.
                  </p>
                </div>
              </div>

              <div class="contact-container">
                <div class="contact">
                  <h1>Chat với GanZ</h1>

                  <div class="contact-item-container">
                    <div class="contact-item">
                      <div>
                        <i class="fas fa-envelope-square email"></i>
                      </div>

                      <a class="a" href="contact.html">
                        <div class="item-content">
                          Email
                          <p>Gửi câu hỏi của bạn</p>
                        </div>
                      </a>
                    </div>
                    <div class="contact-item">
                      <div>
                        <i class="fas fa-phone-square email call"></i>
                      </div>

                      <div class="item-content">
                        Phone
                        <p>Gọi 19001221 ngay!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Help;
