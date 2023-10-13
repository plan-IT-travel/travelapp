package models

import (
	"time"

	"github.com/jinzhu/gorm"
)

type ItineraryItem struct {
	gorm.Model
	// ID          uint      `gorm:"primary_key" json:"id"`
	GroupID     int       `gorm:"type:int;column:group_id;not null" json:"group_id" validate:"required"`
	Title       string    `gorm:"type:varchar;not null" json:"title" validate:"required"`
	Category    string    `gorm:"type:varchar;not null" json:"category" validate:"required"`
	Hyperlink   string    `gorm:"type:varchar;not null" json:"hyperlink" validate:"required"`
	Cost        float32   `gorm:"type:float;not null" json:"cost" validate:"required"`
	DateOfEvent time.Time `gorm:"type:date;not null;column:date_of_event" json:"date_of_event" validate:"required"`
}
