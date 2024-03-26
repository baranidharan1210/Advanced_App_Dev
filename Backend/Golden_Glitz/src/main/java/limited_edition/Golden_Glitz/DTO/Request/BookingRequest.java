package limited_edition.Golden_Glitz.DTO.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequest {

    private Integer head_count;
    private String subscription;
    private String status;
    private Double cost;

    private Long user_id;
    private String category;
    private Long venue_id;
}
